import { Component, OnInit, inject, ChangeDetectionStrategy, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { Reservation } from '../../core/services/reservation/reservation';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { AddReservation, AddReservationSuccess, LoadReservations } from "../../core/stores/reservations/resevation.action";
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { AtomButtonComponent } from '../../core/components/atom-button';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    AtomButtonComponent,
    TranslocoPipe,
    RouterModule

  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent implements OnInit {
  submitted = false;
  date: Date = new Date();

  // onSubmit = output();
  value = null;
  private formBuilder = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private router = inject(Router);
  reservations$: Observable<Reservation[]>;
  isLoading$: Observable<boolean>;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private store: Store<AppState>) {
    this.reservations$ = this.store.select((state) => state.reservation.reservations)
    this.isLoading$ = this.store.select(state => state.reservation.loading);
    this.loadReservations();
  }
  loadReservations() {
    this.store.dispatch(LoadReservations());
  }

  reservationForm: FormGroup = new FormGroup({
    // checkInDate:new FormControl(''),

    // checkOutDate: new FormControl(''),
    // guestName: new FormControl(''),
    // guestEmail: new FormControl(''),
    // roomNumber: new FormControl(''),
  });
  ngOnInit(): void {
    this.submitted = true;
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.reservationService.getReservation(id).subscribe(reservation => {
        if (reservation) {
          this.reservationForm.patchValue(reservation)
        }
      })
    }
  }
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if (id) {
        // update
        console.log("there is a reservation");

        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("update reservation processed")
        })
      }
      else {
        // new
        this.store.dispatch(AddReservation({ reservation }));
        this.reservationForm.patchValue(reservation)
      }
      this.router.navigate(['/list']);
    }
  }

}
