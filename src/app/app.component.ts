import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReservationReducer } from './core/store/reservations/reservation.reducer';
import {AppState} from "./app.state";
// import {TuiRoot} from '@taiga-ui/core';

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
