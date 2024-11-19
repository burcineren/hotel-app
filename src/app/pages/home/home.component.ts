import { Component, OnInit } from '@angular/core';

import { TagModule } from 'primeng/tag';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './overview/overview.component';
import { RoomCleanComponent } from './room-clean/room-clean.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { QuickActionComponent } from './quick-action/quick-action.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        TagModule,
        NgbModule,
        OverviewComponent,
        RoomCleanComponent,
        GuestListComponent,
        QuickActionComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

   
}
