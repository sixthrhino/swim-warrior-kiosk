import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SplashStateService } from 'src/app/splashStateService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  constructor(
    private splashStateService: SplashStateService
 ) { }

 ngOnInit(): void {
    setTimeout(() => {
       this.splashStateService.stop();
    }, 5000);
 }
}
