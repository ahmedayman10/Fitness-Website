import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { authData } from "./auth-data.model";
import { User } from "./user.model";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { TrainingService } from '../training/training.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service';


@Injectable()
export class AuthService{
  authChange = new Subject<boolean>();
  private isAuthanticated = false;

  constructor(private router : Router,
     private afAuth:AngularFireAuth,
      private trainingService:TrainingService,
      private snackbar:MatSnackBar,
      private UIService : UIService
      ){}

  initiateListener(){
    this.afAuth.authState.subscribe(user=>{
      if(user){
        this.isAuthanticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      }else{
        this.trainingService.cancelSubscribtion();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthanticated = false;
      }
    })
  }

  registerUser(authData: authData){
    this.UIService.loadingStateChanged.next(true);
    this.afAuth.
    createUserWithEmailAndPassword(authData.email,authData.password).then(result=>{
      this.UIService.loadingStateChanged.next(false);
    }).catch(error=>{
      this.UIService.loadingStateChanged.next(false);
      let err = error.message;
      let err2 = err.split('firebase')[0];
      let err3 = err2.split(':')[1];
      let err4 = err3.split('.')[0];
      this.UIService.showSnackBar(err4,undefined,3000);    });
  }

  loginUser(authData: authData){
    this.UIService.loadingStateChanged.next(true);

    this.afAuth.signInWithEmailAndPassword(authData.email,authData.password).then(result=>{
      this.UIService.loadingStateChanged.next(false);
    }).catch(error=>{
      this.UIService.loadingStateChanged.next(false);
      let err = error.message;
      let err2 = err.split('firebase')[0];
      let err3 = err2.split(':')[1];
      let err4 = err3.split('.')[0];
      // console.log(err4[0]);
      this.UIService.showSnackBar(err4,undefined,3000);
    });
  }

  logout(){
    this.afAuth.signOut();

  }

  isAuth(){
    return this.isAuthanticated;
  }


}
