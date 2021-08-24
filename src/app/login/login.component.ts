import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('content') content: any;
  invalidDetails = false;
  signupForm: any;
  model: any ;
  closeResult = '';
  constructor(private router: Router) { }

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
    if (this.model.name === 'Admin') {
      this.router.navigate(['/userList']);
    }
  }
 
}
