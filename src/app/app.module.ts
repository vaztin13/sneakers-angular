import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SneakerListComponent } from './sneaker-list/sneaker-list.component';
import { CartComponent } from './cart/cart.component';
import { SneakersHomeComponent } from './sneakers-home/sneakers-home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistButtonComponent } from './wishlist-button/wishlist-button.component';
import { SneakersContactComponent } from './sneakers-contact/sneakers-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SneakerListComponent,
    CartComponent,
    SneakersHomeComponent,
    InputQuantityComponent,
    WishlistComponent,
    WishlistButtonComponent,
    SneakersContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faCartShopping);
  }
}
