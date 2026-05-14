import { Component, OnInit, inject } from '@angular/core';
import { Reservation } from '../../core/services/reservation/reservation';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeleteReservation, LoadReservations } from '../../core/stores/reservations/resevation.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    AsyncPipe,
    DatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss',
})
export class ReservationListComponent implements OnInit {
  private store = inject(Store<AppState>);
  private router = inject(Router);

  reservations$: Observable<Reservation[]> = this.store.select(
    (state) => state.reservation.reservations
  );
  isLoading$: Observable<boolean> = this.store.select(
    (state) => state.reservation.loading
  );
  error$: Observable<string | null> = this.store.select(
    (state) => state.reservation.error
  );

  searchValue = '';
  sortOrder = '';

  filteredReservations$: Observable<Reservation[]> = this.reservations$;

  ngOnInit(): void {
    this.store.dispatch(LoadReservations());
  }

  deleteReservation(id: string): void {
    this.store.dispatch(DeleteReservation({ id }));
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
  }
}
