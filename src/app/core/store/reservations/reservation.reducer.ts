import { createReducer, on } from "@ngrx/store";
import { Reservation } from "../../services/reservation/reservation";
import {AddReservation, AddReservationSuccess, DeleteReservation} from "./resevation.action";



export interface ReservationState {
  reservations: Reservation[];
  error: string | null;
}
const initialState: ReservationState = {
  reservations: [],
  error: null,
};
export const ReservationReducer = createReducer(
    initialState,
    on(AddReservationSuccess, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation],
    error: null
  })),
    // on(AddReservation, (state, { id, checkInDate, checkOutDate, guestName, guestEmail, roomNumber }) => [...state, { id, checkInDate, checkOutDate, guestName, guestEmail, roomNumber }]),
    // on(DeleteReservation, (state, { reservationId }) => state.filter(reservation => reservation.id !== reservationId))
);
