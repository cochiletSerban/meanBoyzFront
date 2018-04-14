import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  // Added my form
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'pwd' : new FormControl(null, Validators.required),
    });
  }
/*
  onSubmit() {
    console.log(this.signupForm);
  }
  */
}
