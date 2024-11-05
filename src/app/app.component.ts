import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-app';
}
