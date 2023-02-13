import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './page/splash/splash.component';
import { SplashStateService } from './splashStateService';
import { HomeComponent } from './page/home/home.component';
import { LeaderboardComponent } from './page/leaderboard/leaderboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [SplashStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
