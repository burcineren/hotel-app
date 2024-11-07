import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReservationReducer } from './core/store/reservations/reservation.reducer';
// import {TuiRoot} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    //  TuiRoot,
    StoreModule.forRoot({ reservation: ReservationReducer }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-app';
}
