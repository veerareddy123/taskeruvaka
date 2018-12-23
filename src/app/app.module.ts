import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  SocialLoginModule, 
  AuthServiceConfig,
  GoogleLoginProvider
} from 'ng4-social-login';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('419638922175-jrgt9qouefqvrf0ggcqbrnpc1ifkdueh.apps.googleusercontent.com')
  }
], false);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
