import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser : User = new User();

  private baseUrl = "http://localhost:8080/user";

  constructor(private httpClient : HttpClient) { }

  createUser(user : User) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/${'signUp'}`, user);
  }

  loginUser(userName : String) : Observable<User>{
    
    return this.httpClient.get<User>(`${this.baseUrl}/${'login'}/${userName}`);
  }



  
}
