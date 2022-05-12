import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { SharedModule } from '../shared/shared.module';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopDialogComponent } from './current-training/stop-dialog-component';
import { TrainingRoutingModule } from './training-routing.module';
import { CrunchesComponent } from './crunches/crunches.component';
import { SideLungesComponent } from './side-lunges/side-lunges.component';
import { TouchToesComponent } from './touch-toes/touch-toes.component';
import { BurpeesComponent } from './burpees/burpees.component';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopDialogComponent,
    CrunchesComponent,
    SideLungesComponent,
    TouchToesComponent,
    BurpeesComponent,
  ],
  imports:[
    SharedModule,
    TrainingRoutingModule,
    // AngularFirestoreModule
  ],
  entryComponents: [StopDialogComponent]
})
export class TrainingModule {}
