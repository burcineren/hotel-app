import { createReducer, on } from "@ngrx/store";
import { Reservation } from "../../services/reservation/reservation";
import { AddReservation, DeleteReservation } from "./resevation.action";


export const initialState: Reservation[] = [];

export const ReservationReducer = createReducer(
    initialState,
    on(AddReservation, (state, { id, checkInDate, checkOutDate, guestName, guestEmail, roomNumber }) => [...state, { id, checkInDate, checkOutDate, guestName, guestEmail, roomNumber }]),
    on(DeleteReservation, (state, { reservationId }) => state.filter(reservation => reservation.id !== reservationId))
);
