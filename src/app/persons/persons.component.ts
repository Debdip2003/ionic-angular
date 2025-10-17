import { Component, OnInit} from '@angular/core';
import { IonList, IonItem } from "@ionic/angular/standalone";
import { PersonsService } from './persons-service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  standalone: true,
  imports: [IonItem, IonList]
})

export class PersonsComponent implements OnInit {
  personList: string[] | undefined  

  constructor(private prsService:PersonsService){
    this.personList = prsService.persons;
  }

  ngOnInit(): void {
    this.personList= this.prsService.persons
  }
}
