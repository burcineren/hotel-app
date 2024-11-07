import { Reservation } from "./core/services/reservation/reservation";
export interface AppState {
  readonly reservation: Reservation[];
}
