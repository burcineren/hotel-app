import { Component, OnInit, inject } from '@angular/core';
import { Reservation } from '../../core/services/reservation/reservation';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AddReservation, DeleteReservation, LoadReservations } from "../../core/stores/reservations/resevation.action";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../app.state";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [RouterModule, HttpClientModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatSelectModule, AsyncPipe],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit {

  reservationsItem: Reservation[] = [];
  filteredReservations: any[] = [];
  sortOrder: String = '';
  private reservationService = inject(ReservationService);
  reservations$: Observable<Reservation[]>;
  isLoading$: Observable<boolean>;

  private router = inject(Router);
  constructor(private store: Store<AppState>) {
    this.reservations$ = this.store.select((state) => state.reservation.reservations)
    this.isLoading$ = this.store.select(state => state.reservation.loading);
    this.loadReservations();
  }
  loadReservations() {
    this.store.dispatch(LoadReservations());
  }


  error: string = '';
  seachValue: string = '';
  ngOnInit(): void {


    this.reservationService.getReservations().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.reservationsItem = data;
      },
      error: (error) => {
        console.error('Error:', error);
        this.error = error.message;
      }
    });
  }
  deleteReservation(id: any) {
    this.store.dispatch(DeleteReservation({ id }));
    // this.reservationService.deleteReservation(id).subscribe(() => {
    //   console.log("delete reservation successfully")
    // });
  }
  searchReservation(value: string) {
    this.reservationService.getReservations().subscribe(res => {
      this.filteredReservations = res.filter(res => res.guestName.toLowerCase() === value.toLowerCase());
    });
    // this.sortOrder(this.sortOrder)
  }
  sortReservation(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder === "reservationLowHigh") {
      this.filteredReservations.sort((a, b) => a.reservation - b.reservation);

    } else if (this.sortOrder === "reservationHighLow") {
      this.filteredReservations.sort((a, b) => b.reservation - a.reservation);

    }
  }
}
