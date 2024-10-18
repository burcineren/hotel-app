import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit {
  submitted = false;

  private formBuilder = inject(FormBuilder);
  reservationForm : FormGroup = new FormGroup({
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
  }
  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid");
    }
  }
}
