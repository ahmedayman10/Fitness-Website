import { Subject } from 'rxjs';
import 'rxjs';
import { AngularFirestore }  from '@angular/fire/compat/firestore';
import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UIService } from '../shared/ui.service';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<any>();
  exercisesChanged = new Subject<any>();
  finishedExercisesChanged = new Subject<Exercise[]>();
  private availableExercises: Exercise[] = [];
  private runningExercise: any ;
  private fbSub :Subscription[]=[];

  constructor( private db: AngularFirestore, private uiService: UIService) { }
  fetchAvailableExercises() {
    this.fbSub.push(this.db
    .collection('availableExercise')
    .snapshotChanges()
    .pipe(map(docs => docs
      .map(doc => {
          let obj:any = doc.payload.doc.data();
          return {
              ...obj,
              id: doc.payload.doc.id
          };
      })
  )).subscribe((exercises: Exercise[]) => {
    this.uiService.loadingStateChanged.next(false);
    this.availableExercises = exercises;
    this.exercisesChanged.next([...this.availableExercises]);
  }, error => {
    this.uiService.loadingStateChanged.next(false);
    this.uiService.showSnackBar('Fetching Exercises failed, please try again later', null, 3000);
    this.exercisesChanged.next(null);
  }));
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSub.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: any) => {
        this.finishedExercisesChanged.next(exercises);
      }));
  }

  cancelSubscribtion(){
    this.fbSub.forEach(sub=>sub.unsubscribe());
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  private addDataToDatabase(exercise:Exercise){
    this.db.collection('finishedExercises').add(exercise);
  }
}
