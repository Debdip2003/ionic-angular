import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: 'root'
})  

export class PersonsService {
  persons:any[] = ['Mary', 'John', 'Alice'];
  onPersonCreate(personName:string){
    this.persons.push(personName);
  }
}