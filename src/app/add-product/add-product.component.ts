import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product = new Product();

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {

    const userString = localStorage.getItem('USER');
    
    if(userString){

      const user = JSON.parse(userString);
    }
    
    else{

      this.router.navigate(['/login']);
      
    }
   
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.goToProductsPage();
    },
      error => console.log(error)
    );
  }

  goToProductsPage(){
    this.router.navigate(['/admin']);
  }

  onSubmit(){
    console.log(this.product);
    this.addProduct();

  }

}
