import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PersonsService } from './persons-service.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  // imports: [IonButtons, IonButton, IonItem, IonList, IonIcon],
})
export class PersonsComponent {
  // personList: { name: string }[] = [];
  // private prsService = inject(PersonsService);
  // private personSub: Subscription | undefined;
  // onRemovePerson(personName: string) {
  //   this.prsService.removePerson(personName);
  // }
  // ngOnInit(): void {
  //   this.personList = this.prsService.persons;
  //   this.personSub = this.prsService.personChanged.subscribe(
  //     (persons: { name: string }[]) => {
  //       this.personList = persons;
  //     }
  //   );
  // }
  // ngOnDestroy(): void {
  //   this.personSub?.unsubscribe();
  // }

  // name: string = 'Debdip';
  // @Input() counter: number = 0;

  // constructor() {
  //   console.log('contructor');
  //   this.name = 'Changed Name in Constructor';
  // }
  // ngOnInit() {
  //   console.log('OnInit');
  //   this.name = 'Changed Name in OnInit';
  // }
  // ngOnDestroy() {
  //   console.log('OnDestroy');
  // }

  // ngOnChanges() {
  //   console.log('OnChanges');
  // }
  onSubmit(form: any) {
    console.log('Form Submitted', form);
    console.log('hello');
  }
}
