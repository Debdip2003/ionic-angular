import { Component, OnInit } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { PersonsComponent } from './persons/persons.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonContent, IonApp, PersonsComponent],
})
export class AppComponent {
  // show: boolean = true;
  // productData: { name: string; price: number }[] | undefined;
  // constructor(private productService: Product) {}
  // getProductData() {
  //   this.productData = this.productService.getProduct();
  //   console.log(this.productData);
  // }
  // counter = 0;
  // updateCounter() {
  //   this.counter++;
  // }
}
