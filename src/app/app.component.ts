
import { Component } from '@angular/core';

import { 
  AuthService,
  SocialUser,
  GoogleLoginProvider,
 
} from 'ng4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskeruvaka';
  public user:any = SocialUser;

  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;
    });
  }
}