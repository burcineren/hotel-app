import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import {KeyValuePipe, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    KeyValuePipe,
    NgForOf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected expanded = false;
  protected open = false;
  protected switch = false;


  protected readonly drawer = {
      Components: [
          {name: 'Button', icon: 'bi bi-5-circle',link:'/list'},
          {name: 'Input', icon: 'bi bi-5-circle',link:'/list'},
          {name: 'Tooltip', icon: 'bi bi-5-circle',link:'/list'},
      ],
      Essentials: [
          {name: 'Getting started', icon: 'bi bi-5-circle',link:'/list'},
          {name: 'Showcase', icon: 'bi bi-5-circle',link:'/list'},
          {name: 'Typography', icon: 'bi bi-5-circle',link:'/list'},
      ],
  };
}
