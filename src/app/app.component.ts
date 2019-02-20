import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../store';
import { AuthService } from './auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'firebase';

//smart component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  user$: Observable<User>;
  subcription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subcription = this.authService.auth$.subscribe();
    
    this.user$ = this.store.select<User>('user');

  }

  ngOnDestroy(): void {
    
    this.subcription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
