import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [
    RouterOutlet,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'hotel-app';
}
