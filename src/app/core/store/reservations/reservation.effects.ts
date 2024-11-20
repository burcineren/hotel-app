import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {AddReservation, AddReservationFailure, AddReservationSuccess, LoadReservations, LoadReservationsFailure, LoadReservationsSuccess} from "./resevation.action";
import {ReservationService} from "../../services/reservation/reservation.service";

@Injectable()
export class ReservationEffects {
   constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ) {}
  loadReservation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadReservations),
      mergeMap(() =>
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
      mergeMap(({ reservation }) =>
        this.reservationService.addReservation(reservation).pipe(
          map(() => AddReservationSuccess({ reservation })),
          catchError((error) => of(AddReservationFailure({ error })))
        )
      )
    )
  );

 
}