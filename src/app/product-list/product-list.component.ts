import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem('USER');
    if(user == null){
      this.router.navigate(['/login']);
    }

    else{
      this.getProducts();
    }
    
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    })
  }

}
