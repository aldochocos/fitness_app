import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**Call ath service to log in the user */
  async registerUser(event: FormGroup) {
        
    const { email, password } = event.value;

    try{
      let result = await this.authService.registerUser(email, password);
      
      this.router.navigate(['/']);
      
    }
    catch (error)
    {
      this.error = error.message;
    }
  }
}
