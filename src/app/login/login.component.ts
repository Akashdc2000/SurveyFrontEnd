import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  passwordFormControl = new FormControl('', [Validators.required]);
  userNameFormControl = new FormControl();


  matcher = {
    isErrorState: (control: FormControl) => {
      return control.invalid && control.touched;
    },
  };

  loginForm = new FormGroup({
    userName: this.userNameFormControl,
    password: this.passwordFormControl,
  });

  isDisabled() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    if (!userName || !password) {
      return true;
    }

    if (password.length < 6) {
      return true;
    }

    return false;
  }

  login() {
    console.log(this.loginForm.value);
  }
}
