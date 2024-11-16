import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    InputIconModule,
    IconFieldModule,
    InputIconModule, IconFieldModule, InputTextModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
