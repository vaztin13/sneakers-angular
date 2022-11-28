import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SneakerListComponent } from './sneaker-list/sneaker-list.component';
import { CartComponent } from './cart/cart.component';
import { SneakersAboutComponent } from './sneakers-about/sneakers-about.component';
import { SneakersHomeComponent } from './sneakers-home/sneakers-home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SneakerListComponent,
    CartComponent,
    SneakersAboutComponent,
    SneakersHomeComponent,
    InputQuantityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
