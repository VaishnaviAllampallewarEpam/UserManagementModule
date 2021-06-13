import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidDetails = false;
  signupForm: any;
  model: any ;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(''),
      'password': new FormControl('')
   });
    this.model = {
      name: '',
      password: ''
    }
  }

  onSubmit() { 
    console.log('Username: ',this.model.name,' Password: ',this.model.password);
    if (this.model.name === 'abc' || this.model.password === '$Admin#1') {
      this.invalidDetails = true;
    }
  }
 
}
