import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LeaderboardComponent } from './page/leaderboard/leaderboard.component';
import { SplashComponent } from './page/splash/splash.component';


const routes: Routes = [
  {
     path: 'home',
     component: HomeComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
