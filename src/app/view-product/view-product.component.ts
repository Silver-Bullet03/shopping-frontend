import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product : Product = new Product();
  id : Number;
  constructor(private productService : ProductService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    const userString = localStorage.getItem('USER');
    
    if(userString){

      const user = JSON.parse(userString);

    }
    
    else{

      this.router.navigate(['/login']);
      
    }
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {this.product = data; } , error => console.log(error));
  }

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe( data => {
      console.log(data);
      
      this.router.navigate(['admin']);
    },
    
    error => console.log(error)
    );
  }

  deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe( data => {
      console.log(data);

      this.router.navigate(['admin']);
    })
  }

}
