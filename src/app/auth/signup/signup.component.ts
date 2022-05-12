import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

  isLoading = false;
  maxDate:any;
  private LoadingSubs : Subscription;
  constructor(private authService : AuthService, private UIService:UIService) { }

  ngOnInit(): void {
    this.LoadingSubs = this.UIService.loadingStateChanged.subscribe(isLoading=>{
      this.isLoading = isLoading;
    })
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  onSubmit(form: NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

  ngOnDestroy(){
    if(this.LoadingSubs){

      this.LoadingSubs.unsubscribe()
    }
  }

}
