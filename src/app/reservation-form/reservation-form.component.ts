import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
export class ReservationFormComponent {

  reservationForm : FormGroup = new FormGroup({
    
  });
}
