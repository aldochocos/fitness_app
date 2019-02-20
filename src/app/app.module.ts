//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//store management
import { Store } from '../store';

//routing
import { AppRoutingModule } from './app-routing.module';

//containers
import { AppComponent } from './app.component';

//feature modules
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
