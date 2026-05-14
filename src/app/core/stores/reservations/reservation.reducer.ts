import { createReducer, on } from '@ngrx/store';
import { Reservation } from '../../services/reservation/reservation';
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

export interface ReservationState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationState = {
  reservations: [],
  loading: false,
  error: null,
};

export const ReservationReducer = createReducer(
  initialState,

  on(LoadReservations, (state) => ({ ...state, loading: true, error: null })),
  on(LoadReservationsSuccess, (state, { reservations }) => ({
    ...state,
    reservations,
    loading: false,
  })),
  on(LoadReservationsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(AddReservation, (state) => ({ ...state, loading: true })),
  on(AddReservationSuccess, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation],
    loading: false,
    error: null,
  })),
  on(AddReservationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(UpdateReservation, (state) => ({ ...state, loading: true })),
  on(UpdateReservationSuccess, (state, { id, reservation }) => ({
    ...state,
    reservations: state.reservations.map((r) => (r.id === id ? reservation : r)),
    loading: false,
    error: null,
  })),
  on(UpdateReservationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(DeleteReservation, (state) => ({ ...state, loading: true })),
  on(DeleteReservationSuccess, (state, { id }) => ({
    ...state,
    reservations: state.reservations.filter((r) => r.id !== id),
    loading: false,
  })),
  on(DeleteReservationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
