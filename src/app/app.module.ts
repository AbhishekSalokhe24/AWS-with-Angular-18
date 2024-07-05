import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Amplify} from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CookieService } from 'ngx-cookie-service';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_POOL_ID',
      userPoolClientId: 'YOUR_CLIENT_ID'
    }
  }
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
