import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonIcon,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { PersonsService } from './persons-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  standalone: true,
  imports: [IonButtons, IonButton, IonItem, IonList, IonIcon],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: { name: string }[] = [];
  private prsService = inject(PersonsService);
  private personSub: Subscription | undefined;

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnInit(): void {
    this.personList = this.prsService.persons;
    this.personSub = this.prsService.personChanged.subscribe(
      (persons: { name: string }[]) => {
        this.personList = persons;
      }
    );
  }

  ngOnDestroy(): void {
    this.personSub?.unsubscribe();
  }
}
