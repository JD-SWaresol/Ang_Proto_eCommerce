import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { AboutUsComponent } from './components/know-us/about-us/about-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SingupComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    PaymentCardComponent,
    AboutUsComponent,
    CategoriesComponent,
    SuscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
