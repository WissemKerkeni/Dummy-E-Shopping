import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('./presentation/product-list/components/product-list/product-list.component').then((m) => m.ProductListComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./presentation/product-details/components/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./presentation/cart/components/cart/cart.component').then((m) => m.CartComponent),
  },
];
