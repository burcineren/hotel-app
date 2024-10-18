import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  //CRUD

  getReservations(): Reservation[] {
    return this.reservations;
  }
  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(r => r.id === id);
  }
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(r => r.id === id);
    this.reservations.splice(index, 1);
  }
  updateReservation(updateReservation: Reservation): void {
    let index = this.reservations.findIndex(r => r.id === updateReservation.id);
    this.reservations[index] = updateReservation;
  }
}
