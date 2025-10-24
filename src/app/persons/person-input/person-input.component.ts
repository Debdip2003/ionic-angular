import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonContent } from '@ionic/angular/standalone';
import { PersonsService } from '../persons-service.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, FormsModule],
})
export class PersonInputComponent {
  newPerson: string = '';

  constructor(private prsService: PersonsService) {}

  onAddPerson() {
    console.log(`${this.newPerson} added!`);
    this.prsService.onPersonCreate(this.newPerson);
    this.newPerson = '';
  }
}
