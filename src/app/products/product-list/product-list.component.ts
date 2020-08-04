import { Component, OnInit, OnDestroy } from '@angular/core';

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
import * as ProductActions from '../state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage$: Observable<string>;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;

  constructor(
    private productService: ProductService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  ngOnDestroy(): void {}

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleShowProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductActions.setCurrentProduct({ currentProductId: product.id })
    );
  }
}
