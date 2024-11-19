import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    SidebarComponent,
    HeaderComponent,
  
    
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = false;
  selectedOption: any;
  constructor(private observer: BreakpointObserver) { }
  protected expanded = false;
  protected open = false;
  protected switch = false;
 
 

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  @Input() isCollapsed = false;
  
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = true;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
