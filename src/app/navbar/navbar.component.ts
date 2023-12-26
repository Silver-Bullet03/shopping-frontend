import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName : string;

  isLoggedIn : boolean = false;

  isSignUp : boolean = false;

  isLogin : boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {

    const userString = StorageService.getUser();

    if(userString){
      const user = JSON.parse(userString);
      this.userName = user.userName; 
      this.isLoggedIn = true;
    }
  }

  logout(){
    StorageService.removeUser();
    this.router.navigate(['/login']);
    this.isLoggedIn =  false;
  }

}
