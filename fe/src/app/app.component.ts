import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { CarrousellComponent } from './components/carrousell/carrousell.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    WelcomeBannerComponent,
    CarrousellComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fe';

  photos = [
    'fe/images/castillo.jpeg'
  ];


}
