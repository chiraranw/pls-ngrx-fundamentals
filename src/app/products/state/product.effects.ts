import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../products.service';
import * as ProductActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productSvc: ProductService) {}

  //load products
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productSvc.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) => of(ProductActions.loadProductsFail({ error })))
        )
      )
    );
  });
}
