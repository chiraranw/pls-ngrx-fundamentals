import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() displayCode: boolean;
  @Input() selectedProduct: Product;
  @Output() displayProductChanged: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() initializeNewProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() productWasSelected: EventEmitter<Product> = new EventEmitter<
    Product
  >();

  checkChanged(): void {
    this.displayProductChanged.emit();
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }
}
