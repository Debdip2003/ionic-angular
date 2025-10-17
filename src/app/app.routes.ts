import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent:()=> import('./home/home.page').then(m=>m.HomePage)
  },
  {
    path: 'persons',
    loadComponent:()=> import('./persons/persons.component').then(m=>m.PersonsComponent),
  },
  {
    path:'input',
    loadComponent:()=> import('./persons/person-input/person-input.component').then(m=>m.PersonInputComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
