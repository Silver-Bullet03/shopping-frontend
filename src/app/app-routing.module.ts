import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path : 'login', component : LoginPageComponent},
  {path : 'signUp', component : SignUpPageComponent},
  {path : 'products' , component : ProductListComponent},
  {path : 'admin', component : AdminPanelComponent},
  {path : 'addProduct', component : AddProductComponent},
  {path : 'view-product/:id', component : ViewProductComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
