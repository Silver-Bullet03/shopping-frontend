import { Injectable } from '@angular/core';
import { User } from './user';


const USER = 'USER';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  

  constructor() { }

  static saveUser(user:any) : void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getUser() : any{
    return localStorage.getItem('USER');
  }

  static removeUser() : void{
    window.localStorage.removeItem(USER);
  }

}
