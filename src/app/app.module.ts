import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule} from "ngx-ui-loader"
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CakeComponent } from './components/cake/cake.component';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { SignupComponent } from './components/signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail-component/detail-component.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DiscountPipe } from './discount.pipe';
import { AddcakeComponent } from './components/addcake/addcake.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PreviousOrdersComponent } from './components/previous-orders/previous-orders.component';
import { PreviousCakesDetailsComponent } from './components/previous-cakes-details/previous-cakes-details.component'

//Guard
import { AuthGuard } from './auth.guard';
import {UserGuard} from './user.guard';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CakeComponent,
    CakeListComponent,
    NavabarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    SearchComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    DiscountPipe,
    AddcakeComponent,
    ForgetPasswordComponent,
    PreviousOrdersComponent,
    PreviousCakesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [AuthGuard,UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
