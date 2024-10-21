import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./reservation-list/reservation-list.component').then(m => m.ReservationListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
  }
];

