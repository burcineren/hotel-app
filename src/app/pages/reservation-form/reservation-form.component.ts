import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Reservation } from '../../core/services/reservation/reservation';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {
  AddReservation,
  LoadReservations,
  UpdateReservation,
} from '../../core/stores/reservations/resevation.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { AtomButtonComponent } from '../../core/components/atom-button';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgClass } from '@angular/common';
import { ReservationService } from '../../core/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    AtomButtonComponent,
    TranslocoPipe,
    RouterModule,
    NgClass,
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(Store<AppState>);

  isLoading$: Observable<boolean> = this.store.select(
    (state) => state.reservation.loading
  );
  isEditMode = false;
  submitted = false;

  reservationForm: FormGroup = this.formBuilder.group({
    checkInDate: ['', Validators.required],
    checkOutDate: ['', Validators.required],
    guestName: ['', Validators.required],
    guestEmail: ['', [Validators.required, Validators.email]],
    roomNumber: ['', Validators.required],
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.store.dispatch(LoadReservations());
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.reservationForm.invalid) return;

    const reservation: Reservation = this.reservationForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.store.dispatch(UpdateReservation({ id, reservation }));
    } else {
      this.store.dispatch(AddReservation({ reservation }));
    }

    this.router.navigate(['/list']);
  }
}
