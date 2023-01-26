import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule}from "@angular/forms"
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SellerComponent,
    AddProductComponent,
    AddTocartComponent,
    ViewDetailsComponent,
    SellerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
