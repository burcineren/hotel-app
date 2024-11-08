import { createAction, props } from "@ngrx/store";
import { Reservation } from "../../services/reservation/reservation";

export const LoadReservations = createAction('[Reservation] Load Reservations');
export const LoadReservationsSuccess = createAction('[Reservation] Load Reservations Success', props<{ reservations: Reservation[] }>());
export const LoadReservationsFailure = createAction('[Reservation] Load Reservations Failure', props<{ error: string }>());
export const AddReservation = createAction('[Reservation] Add Reservations', props<{ reservation: Reservation }>());
export const AddReservationSuccess = createAction(
  '[Reservation] Add Reservation Success',
  props<{ reservation: Reservation }>()
);


export const DeleteReservation = createAction('[Reservation] Delete Reservations', props<{ id: string }>());

