import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KeyValuePipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

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
        SplitterModule,
        SidebarModule,
        ButtonModule,
        PanelMenuModule,
        BreadcrumbModule,
        InputIconModule, IconFieldModule, InputTextModule,
        MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReservationListComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    sidebarVisible: boolean = false;
    items: MenuItem[];
    breadcrumbItem: MenuItem[] | undefined;
    selectedOption: any;
    options = [
      { label: 'Account', icon: 'pi pi-user' },
      { label: 'Settings', icon: 'pi pi-cog' },
      { label: 'Logout', icon: 'pi pi-sign-out' }
    ];

    home: MenuItem | undefined;

    constructor(private observer: BreakpointObserver) {}
    protected expanded = false;
    protected open = false;
    protected switch = false;
    title = 'material-responsive-sidenav';
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    isMobile= true;
    isCollapsed = false;
    ngOnInit() {
        this.breadcrumbItem = [
            { label: 'Electronics' },
            { label: 'Computer' },
            { label: 'Accessories' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
        this.items = [
            {
                label: 'Files',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Documents',
                        icon: 'pi pi-file',
                        items: [
                            {
                                label: 'Invoices',
                                icon: 'pi pi-file-pdf',
                                items: [
                                    {
                                        label: 'Pending',
                                        icon: 'pi pi-stop'
                                    },
                                    {
                                        label: 'Paid',
                                        icon: 'pi pi-check-circle'
                                    }
                                ]
                            },
                            {
                                label: 'Clients',
                                icon: 'pi pi-users'
                            }
                        ]
                    },
                    {
                        label: 'Images',
                        icon: 'pi pi-image',
                        items: [
                            {
                                label: 'Logos',
                                icon: 'pi pi-image'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Cloud',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Upload',
                        icon: 'pi pi-cloud-upload'
                    },
                    {
                        label: 'Download',
                        icon: 'pi pi-cloud-download'
                    },
                    {
                        label: 'Sync',
                        icon: 'pi pi-refresh'
                    }
                ]
            },
            {
                label: 'Devices',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Phone',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Desktop',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Tablet',
                        icon: 'pi pi-tablet'
                    }
                ]
            }
        ];
        this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
            if(screenSize.matches){
              this.isMobile = true;
            } else {
              this.isMobile = false;
            }
          });
    }
    toggleMenu() {
        if(this.isMobile){
          this.sidenav.toggle();
          this.isCollapsed = true;
        } else {
          this.sidenav.open();
          this.isCollapsed = !this.isCollapsed;
        }
      }
}
