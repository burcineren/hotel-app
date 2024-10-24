import { Injectable, inject } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private apiUrl = "http://localhost:3000";
  private http = inject(HttpClient);

  // constructor() {
  //   let savedReservations = localStorage.getItem('reservations');
  //   this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  // }
  //CRUD

  getReservations(): Observable<Reservation[]> {
    // return this.reservations;
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`).pipe(
      tap(response => console.log('Raw API Response:', response)), 
      catchError(this.handleError)
    );
  }
  getReservation(id: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation/${id}`).pipe(
      catchError(this.handleError)
    );
    // return this.reservations.find(r => r.id === id);
  }
  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    console.log(this.reservations)
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservations/${id}`);
  }
  
  updateReservation(id:string,updateReservation: Reservation): void {
    let index = this.reservations.findIndex(r => r.id === id);
    this.reservations[index] = updateReservation;
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));

  }
    // Error handling
    private handleError(error: HttpErrorResponse) {
      let errorMessage = 'An error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
      } else {
        // Backend error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(() => errorMessage);
    }
}
