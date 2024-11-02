import { Component, OnInit, inject } from '@angular/core';
import { Reservation } from '../../core/reservation/reservation';
import { ReservationService } from '../../core/reservation/reservation.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [RouterModule, HttpClientModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatSelectModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];
  filteredReservations: any[] = [];
  sortOrder: String = '';
  private reservationService = inject(ReservationService);
  private router = inject(Router);
  error: string = '';
  seachValue: string = '';
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
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("delete reservation successfully")
    });
  }
  searchReservation(value: string) {
    this.reservationService.getReservations().subscribe(res => {
      this.filteredReservations = res.filter(res => res.guestName.toLowerCase() === value.toLowerCase());
    });
    // this.sortOrder(this.sortOrder)
  }
  sortReservation(sortValue: string) {
    this.sortOrder = sortValue;

    if(this.sortOrder === "reservationLowHigh"){
      this.filteredReservations.sort((a,b)=> a.reservation - b.reservation);
      
    } else if(this.sortOrder === "reservationHighLow"){
      this.filteredReservations.sort((a,b)=> b.reservation - a.reservation);

    }
  }
}
