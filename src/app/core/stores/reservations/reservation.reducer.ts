import {createReducer, on} from "@ngrx/store";
import {Reservation} from "../../services/reservation/reservation";
import {
  AddReservation,
  AddReservationFailure,
  AddReservationSuccess,
  DeleteReservation,
  LoadReservations,
  LoadReservationsFailure,
  LoadReservationsSuccess
} from "./resevation.action";


export interface ReservationState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationState = {
  reservations: [],
  loading: false,
  error: '',
};
export const ReservationReducer = createReducer(
  initialState,

  on(LoadReservations, state => ({...state, loading: true})),
  on(LoadReservationsSuccess, (state, {reservations}) => ({...state, reservations, loading: false})),

  on(LoadReservationsFailure, (state, {error}) => ({...state, error, loading: false})),

  on(AddReservation, (state, {reservation}) => ({...state, reservations: [...state.reservations, reservation]})),

  on(AddReservationSuccess, (state, {reservation}) => ({
    ...state,
    reservations: [...state.reservations, reservation],
    error: null
  })),

  on(DeleteReservation, (state, {id}) => ({...state, todos: state.reservations.filter(t => t.id !== id)})),
  on(AddReservationFailure, (state, {error}) => ({
    ...state,
    error,
  }))
);
