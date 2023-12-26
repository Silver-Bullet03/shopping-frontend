import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  user : User = new User();

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data => {
      
      this.goToProductsPage();
    },
      error => console.log(error)
    );
  }

  goToProductsPage(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    
    this.saveUser();

  }

}
