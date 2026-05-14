import { createAction, props } from '@ngrx/store';
import { Reservation } from '../../services/reservation/reservation';

export const LoadReservations = createAction('[Reservation] Load Reservations');
export const LoadReservationsSuccess = createAction(
  '[Reservation] Load Reservations Success',
  props<{ reservations: Reservation[] }>()
);
export const LoadReservationsFailure = createAction(
  '[Reservation] Load Reservations Failure',
  props<{ error: string }>()
);

export const AddReservation = createAction(
  '[Reservation] Add Reservation',
  props<{ reservation: Reservation }>()
);
export const AddReservationSuccess = createAction(
  '[Reservation] Add Reservation Success',
  props<{ reservation: Reservation }>()
);
export const AddReservationFailure = createAction(
  '[Reservation] Add Reservation Failure',
  props<{ error: string }>()
);

export const UpdateReservation = createAction(
  '[Reservation] Update Reservation',
  props<{ id: string; reservation: Reservation }>()
);
export const UpdateReservationSuccess = createAction(
  '[Reservation] Update Reservation Success',
  props<{ id: string; reservation: Reservation }>()
);
export const UpdateReservationFailure = createAction(
  '[Reservation] Update Reservation Failure',
  props<{ error: string }>()
);

export const DeleteReservation = createAction(
  '[Reservation] Delete Reservation',
  props<{ id: string }>()
);
export const DeleteReservationSuccess = createAction(
  '[Reservation] Delete Reservation Success',
  props<{ id: string }>()
);
export const DeleteReservationFailure = createAction(
  '[Reservation] Delete Reservation Failure',
  props<{ error: string }>()
);
