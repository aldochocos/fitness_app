import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


//view component
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid)
    {
      console.log('sending the form to parent');
      this.submitted.emit(this.form);
    }
    else
    {
      console.log('the form is invalid');
    }
  }

  get PasswordInvalid()
  {
    let control = this.form.get('password');

    return control.hasError('required') && control.touched;
  }

  get EmailInvalid() {
    let control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

}
