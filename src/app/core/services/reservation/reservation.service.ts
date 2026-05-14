import { Injectable, inject } from '@angular/core';
import { Reservation } from './reservation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getReservations(): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>(`${this.apiUrl}/reservations`)
      .pipe(catchError(this.handleError));
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http
      .get<Reservation>(`${this.apiUrl}/reservations/${id}`)
      .pipe(catchError(this.handleError));
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http
      .post<Reservation>(`${this.apiUrl}/reservations`, reservation)
      .pipe(catchError(this.handleError));
  }

  updateReservation(id: string, reservation: Reservation): Observable<void> {
    return this.http
      .put<void>(`${this.apiUrl}/reservations/${id}`, reservation)
      .pipe(catchError(this.handleError));
  }

  deleteReservation(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/reservations/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error ${error.status}: ${error.message}`;
    return throwError(() => new Error(message));
  }
}
