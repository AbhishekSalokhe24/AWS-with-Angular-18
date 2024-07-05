import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  userName: string | undefined;


getUserFullName(_t5: any) {
throw new Error('Method not implemented.');
}
  title = 'hello-world';

  formFields = {
    signUp: {
      name: {
        order: 1
      },
      email: {
        order: 2
      },
      password: {
        order: 5
      },
      confirm_password: {
        order: 6
      }
    },
  };
  constructor(private authService: AuthService,private cookieService: CookieService){}

  // ngOnInit(): void {

  //   let user = this.authService.getCurrentUserFullName();
  //   console.log("user: ", user);
  // }


  async ngOnInit(): Promise<void> {
    this.userName = await this.authService.getCurrentUserFullName();
    this.authService.getCurrentSession()
      .then(session => {
        console.log('Access Token:', session.tokens.accessToken);
        console.log('ID Token:', session.tokens.idToken);

        // Store tokens in cookies
        this.cookieService.set('accessToken', session.tokens.accessToken);
        this.cookieService.set('idToken', session.tokens.idToken);
      })
      .catch(error => {
        console.error('Error fetching tokens:', error);
      });
  }


 
}
