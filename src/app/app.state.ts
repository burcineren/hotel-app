import { Action, ActionReducer } from "@ngrx/store";
import { ReservationReducer, ReservationState } from "./core/store/reservations/reservation.reducer";
import { ReservationEffects } from "./core/store/reservations/reservation.effects";
export interface AppState {
  reservation: ReservationState;
}
export interface AppStore {
  reservation: ActionReducer<ReservationState, Action>;
}
export const appStore: AppStore = {
  reservation: ReservationReducer
}
export const appEffects = [ReservationEffects];