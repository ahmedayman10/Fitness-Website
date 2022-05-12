import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
 isLoading = false;
 private loadingSubs : Subscription;

  loginForm!: FormGroup;
  constructor(private authService: AuthService, private UIService:UIService) {}

  ngOnInit() {
    this.loadingSubs = this.UIService.loadingStateChanged.subscribe(isLoading=>{
      this.isLoading = isLoading;
    })
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.loginUser({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy(){
    if(this.loadingSubs){

      this.loadingSubs.unsubscribe();
    }
  }
}
