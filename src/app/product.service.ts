import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/products";

  constructor( private httpClient : HttpClient) {   }

  getProductsList() : Observable<Product[]>{
      return this.httpClient.get<Product[]>(`${this.baseUrl}/${"all"}`);
  }

  addProduct(product : Product) : Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/${"admin/addProduct"}`,product);
  }

  getProductById(id : Number) : Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }
   
  updateProduct(id : Number, product : Product) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,product);
  }

  deleteProduct(id : Number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${"delete"}/${id}`);
  }

}
