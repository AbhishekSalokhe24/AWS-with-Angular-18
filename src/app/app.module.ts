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
      userPoolId: 'us-east-1_elpXBwqhh',
      userPoolClientId: '3mc5f6lv98usoj8mt2fmavaqlc'
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
