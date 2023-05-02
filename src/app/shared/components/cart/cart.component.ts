import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: Cart[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
