import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersAboutComponent } from './sneakers-about/sneakers-about.component';
import { SneakersHomeComponent } from './sneakers-home/sneakers-home.component';
import { CartComponent } from './cart/cart.component';
 
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
    path: 'about',
    component: SneakersAboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
