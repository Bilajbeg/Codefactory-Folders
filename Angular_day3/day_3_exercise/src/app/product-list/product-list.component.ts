import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Iproducts[] = products;

}
