import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[ 
  {path:"",component:ProductComponent},
  {path:"seller",component:SellerComponent},
  {path:"seller-home",component:SellerHomeComponent,canActivate:[AuthGuard]},
  {path:"add-product",component:AddProductComponent},
  {path:"addtocart",component:AddTocartComponent},
  {path:"view-details",component:ViewDetailsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
