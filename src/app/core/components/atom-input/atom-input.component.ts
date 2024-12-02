import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, Input, computed, input, signal } from '@angular/core';
import { AtomIconLoaderComponent } from '../svg-icons/atom-icon-loader';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'be-atom-input',
  standalone: true,
  imports: [ NgTemplateOutlet, AtomIconLoaderComponent,NgClass,CommonModule, ReactiveFormsModule],
  templateUrl: './atom-input.component.html',
  styleUrl: './atom-input.component.scss'
})
export class AtomInputComponent {

  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() formControlName: string;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() classes: string = 'reservation-form';


  computedClasses(): string {
    return `${this.classes} ${this.disabled ? 'disabled' : ''}`;
  }
}
