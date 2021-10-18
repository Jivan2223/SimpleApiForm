import { ValidateService } from './validate.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  form: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      validUsername: ['', Validators.required, ValidateService.validUsername],
      validPassword: ['', Validators.required, ValidateService.validPassword],
    })
  }

  get validUsername(){
    return this.form.get('validUsername') as FormControl;
  }
  get validPassword(){
    return this.form.get('validPassword') as FormControl;
  }

  onSubmit(){
    this.router.navigate(['users']);
  }

}
