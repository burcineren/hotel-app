import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CarouselModule, ButtonModule,TagModule,
        NgbModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    images: { src: string; alt: string }[] = [
        { src: 'assets/images/room-1.jpeg', alt: 'Slide 1' },
        { src: 'assets/images/room-2.jpeg', alt: 'Slide 2' },
        { src: 'assets/images/room-3.jpeg', alt: 'Slide 3' },
        { src: 'assets/images/room-1.jpeg', alt: 'Slide 4' },
        { src: 'assets/images/room-2.jpeg', alt: 'Slide 5' },
      ];
}
