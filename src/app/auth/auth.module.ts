import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//third party
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../../environments/environment';
import { AuthRoutingModule } from './auth-routing.module';

//shared modules
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule.forRoot(),
    
  ]
})
export class AuthModule { }
