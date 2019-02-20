import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**Call ath service to log in the user */
  async loginUser(event: FormGroup) {
    
    const { email, password } = event.value;

    try{
      let result = await this.authService.loginUser(email, password);
      console.log('result:', result);
      this.router.navigate(['/']);
      console.log('user logged in');
    }
    catch (error)
    {
      this.error = error.message;
    }
  }

}
