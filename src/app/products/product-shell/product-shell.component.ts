import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';
import { Store } from '@ngrx/store';
import {
  ProductState,
  State,
  getShowProductCode,
  getCurrentProduct,
  getProducts,
  getError,
} from '../state/product.reducer';
import * as ProductPageActions from '../state/product-page.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css'],
})
export class ProductShellComponent implements OnInit {
  errorMessage$: Observable<string>;
  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;

  constructor(
    private productService: ProductService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(ProductPageActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleShowProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductPageActions.setCurrentProduct({ currentProductId: product.id })
    );
  }
}
