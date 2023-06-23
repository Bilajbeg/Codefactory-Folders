import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }

  addToCart() {
    alert("your Product Added To The Cart")
    this.cartService.addCart(this.product)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFormRouting'];
      this.product = products[this.index];
      console.log(this.index);

    });
  }

}
