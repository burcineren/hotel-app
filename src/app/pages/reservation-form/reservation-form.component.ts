import { Component, OnInit, inject,ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { Reservation } from '../../core/services/reservation/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CalendarModule } from 'primeng/calendar';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiInputDateModule, TuiTextfieldControllerModule,TuiInputNumberModule} from '@taiga-ui/legacy';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
    CalendarModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiInputNumberModule,
    ButtonModule
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent implements OnInit {
  submitted = false;
  date: Date = new Date(); 
   value = null;
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
      this.reservationService.addReservation(reservation);

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
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Create reservation processed")
        })
        this.reservationForm.patchValue(reservation)
      }
      this.router.navigate(['/list']);
    }
  }

}
