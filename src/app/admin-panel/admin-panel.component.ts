import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { User } from '../user';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  products : Product[];
  isAdmin : boolean;

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {

    const userString = localStorage.getItem('USER');
    
    if(userString){

      const user = JSON.parse(userString);

      if(user.role == 1){

        this.isAdmin = true;

        this.getProducts();
      }
    }
    
    else{

      this.router.navigate(['/login']);
      
    }
  }

  private getProducts(){

    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    })

  }

  viewProduct(id : Number){
    this.router.navigate(['view-product',id]);
  }



}
