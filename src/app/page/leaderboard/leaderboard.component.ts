import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  time;
  title="JSC Leaderboard";
  constructor(){
    setInterval(() => {
      this.time = new Date();
   }, 1000);

  }
}
