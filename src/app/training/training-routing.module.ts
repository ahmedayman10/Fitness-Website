import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurpeesComponent } from './burpees/burpees.component';
import { CrunchesComponent } from './crunches/crunches.component';
import { SideLungesComponent } from './side-lunges/side-lunges.component';
import { TouchToesComponent } from './touch-toes/touch-toes.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'crunches', component: CrunchesComponent },
  { path: 'sideLunges', component: SideLungesComponent },
  { path: 'touchToes', component: TouchToesComponent },
  { path: 'burpees', component: BurpeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
