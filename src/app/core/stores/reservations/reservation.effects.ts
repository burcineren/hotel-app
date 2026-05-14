import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  AddReservation,
  AddReservationFailure,
  AddReservationSuccess,
  DeleteReservation,
  DeleteReservationFailure,
  DeleteReservationSuccess,
  LoadReservations,
  LoadReservationsFailure,
  LoadReservationsSuccess,
  UpdateReservation,
  UpdateReservationFailure,
  UpdateReservationSuccess,
} from './resevation.action';
import { ReservationService } from '../../services/reservation/reservation.service';

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ) {}

  loadReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadReservations),
      switchMap(() =>
        this.reservationService.getReservations().pipe(
          map((reservations) => LoadReservationsSuccess({ reservations })),
          catchError((error) => of(LoadReservationsFailure({ error: error.message })))
        )
      )
    )
  );

  addReservation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddReservation),
      switchMap(({ reservation }) =>
        this.reservationService.addReservation(reservation).pipe(
          map(() => AddReservationSuccess({ reservation })),
          catchError((error) => of(AddReservationFailure({ error: error.message })))
        )
      )
    )
  );

  updateReservation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateReservation),
      switchMap(({ id, reservation }) =>
        this.reservationService.updateReservation(id, reservation).pipe(
          map(() => UpdateReservationSuccess({ id, reservation })),
          catchError((error) => of(UpdateReservationFailure({ error: error.message })))
        )
      )
    )
  );

  deleteReservation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteReservation),
      switchMap(({ id }) =>
        this.reservationService.deleteReservation(id).pipe(
          map(() => DeleteReservationSuccess({ id })),
          catchError((error) => of(DeleteReservationFailure({ error: error.message })))
        )
      )
    )
  );
}
