import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [MatButtonModule,
    MatListModule, MatIconModule, MatSidenavModule,
    RouterLink,
    RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed: boolean = false;
  isMobile = true;
  sidenav!: MatSidenav;
}
