import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  public persons: { name: string }[] = [];
  personChanged = new Subject<{ name: string }[]>();

  constructor(private https: HttpClient) {
    this.fetchPersons();
  }

  fetchPersons() {
    this.https
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.persons = data;
        this.personChanged.next(this.persons);
        // console.log(data);
      });
  }
  onPersonCreate(personName: string) {
    const newPerson = { name: personName };
    this.persons.push(newPerson);
    this.personChanged.next(this.persons);
  }
  removePerson(personName: string) {
    this.persons = this.persons.filter((p) => p.name !== personName);
    this.personChanged.next(this.persons);
  }
}
