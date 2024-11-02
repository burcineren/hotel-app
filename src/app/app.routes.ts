import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/reservation-list/reservation-list.component').then(m => m.ReservationListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/reservation-form/reservation-form.component').then(m => m.ReservationFormComponent)
  }
];

