import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'overview',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  images: { src: string; alt: string }[] = [
    { src: 'assets/images/room-1.jpeg', alt: 'Slide 1' },
    { src: 'assets/images/room-2.jpeg', alt: 'Slide 2' },
    { src: 'assets/images/room-3.jpeg', alt: 'Slide 3' },
    { src: 'assets/images/room-1.jpeg', alt: 'Slide 4' },
    { src: 'assets/images/room-2.jpeg', alt: 'Slide 5' },
  ];
}
