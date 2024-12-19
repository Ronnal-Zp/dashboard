import { Component, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  public product = input.required<Product>();

  public onIncrementQuantity = output<number>();

  incrementQuantity() {
    this.onIncrementQuantity.emit( this.product().quantity + 1 );
  }

}
