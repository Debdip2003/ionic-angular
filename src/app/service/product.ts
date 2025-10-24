import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  getProduct() {
    return [
      {
        name: 'Laptop',
        price: 45000,
      },
      {
        name: 'Mobile',
        price: 25000,
      },
      {
        name: 'Tablet',
        price: 15000,
      },
    ];
  }
}
