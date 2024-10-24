import { Component, OnInit, inject } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit  {

  reservations: Reservation[] = [];
  private reservationService = inject(ReservationService);
  private router = inject(Router);
  error: string = '';

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.reservations = data;
      },
      error: (error) => {
        console.error('Error:', error);
        this.error = error.message;
      }
    });
  }
  deleteReservation(id: any) {
    this.reservationService.deleteReservation(id).subscribe(()=> {
      console.log("delete reservation successfully")
    });
  }
}
