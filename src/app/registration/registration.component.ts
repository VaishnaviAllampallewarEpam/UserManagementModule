import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genders = ['Male', 'Female'];
  registrationForm: any;
  forbiddenUserNames = ['abc123', 'abc_123'];
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null, [Validators.required]),
      'usr': new FormControl(null, [Validators.required, this.forbiddenNames]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, this.phoneNumber]),
      'password': new FormControl(null, [Validators.required, this.passwordCheck]),
      'cnfpassword': new FormControl(null, [Validators.required, this.confirmPassword.bind(this)]),
      'gender': new FormControl('Male', [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'confirm': new FormControl(false, [Validators.required])
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('SuccessFully Registered');
      this.route.navigate(['/login']);
    } else {
      alert('Please fill up all the details');
    }
  }

  forbiddenNames(control: FormControl) {
    if (control.value === 'abc123' || control.value === 'abc_123') {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  phoneNumber(control: FormControl) {
    let val: string;
    val = String(control.value);
    if (val && val.length !== 10) {
      return {'invalidPhonenUmber': true};
    } else {
      return null;
    }
  }

  passwordCheck(control: FormControl) {
    let val: string;
    val = control.value;
    if (val && val.length < 8) {
      return {'invalidPassword': true};
    } else {
      return null;
    }
  }

  confirmPassword(control: FormControl) {
    let val: string;
    val = control.value;
    if (val && val.length < 8) {
      return {'cnfPasswordCriteria': true}
    }
    return null;
  }

}
