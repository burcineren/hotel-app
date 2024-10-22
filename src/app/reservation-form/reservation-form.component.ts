import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit {
  submitted = false;

  private formBuilder = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

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
      let reservation = this.reservationService.getReservation(id)
      console.log("reservation:::", reservation);
      if (reservation) {
        this.reservationForm.patchValue(reservation)
      }
    }
  }
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if (id) {
        // update
        this.reservationService.updateReservation(id,reservation)
      }
      else {
        // new
        this.reservationForm.patchValue(reservation)
      }
      this.router.navigate(['/list']);
    }
  }

}
