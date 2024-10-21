import { Component, OnInit, inject } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit  {

  reservations: Reservation[] = [];
  private reservationService = inject(ReservationService);
  private router = inject(Router);


  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
