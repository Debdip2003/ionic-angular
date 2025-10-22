import { Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';

export const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
  },
  {
    path: 'person-input',
    component: PersonInputComponent,
  },
];
