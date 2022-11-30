import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersHomeComponent } from './sneakers-home/sneakers-home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SneakersContactComponent } from './sneakers-contact/sneakers-contact.component';

 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'sneakers',
    pathMatch: 'full'
  },
  {
    path: 'sneakers',
    component: SneakersHomeComponent
  },
  {
    path: 'contact',
    component: SneakersContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
