import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { TrainingComponent } from "./training/training.component";
// import { SideLungesComponent } from "./training/side-lunges/side-lunges.component";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes :Routes = [
  { path:'', component: WelcomeComponent },
  { path: 'training', loadChildren: ()=> import('./training/training.module').then(m=>m.TrainingModule)}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule{}
