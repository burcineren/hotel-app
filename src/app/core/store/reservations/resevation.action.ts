import { createAction, props} from "@ngrx/store";
import { Reservation } from "../../services/reservation/reservation"; 

export const AddReservation = createAction('[Reservation] Add Reservation', props<Reservation>());
export const DeleteReservation = createAction('[Reservation] Delete Reservation', props<{ reservationId: string }>());