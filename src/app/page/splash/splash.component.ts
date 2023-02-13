import { Component, OnInit } from '@angular/core';
import { SplashStateService } from '../../splashStateService';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})

export class SplashComponent implements OnInit {
  // The screen starts with the maximum opacity
  opacityChange = 1;
  splashTransition;
  showSplash = true;
  ANIMATION_DURATION = 1;

  constructor(
      private splashStateService: SplashStateService
  ) { }

  ngOnInit(): void {

      // Somewhere the stop method has been invoked
      this.splashStateService.subscribe(res => {
        this.hideSplashAnimation();
      });

  }

  private hideSplashAnimation() {
      // Setting the transition
      this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
      this.opacityChange = 0;

      setTimeout(() => {
        // After the transition is ended the showSplash will be hided
        this.showSplash = !this.showSplash;
      }, 1000);
  }
}
