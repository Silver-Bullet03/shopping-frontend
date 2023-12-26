import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user : User =  new User();

  givenUserName : String;
  givenPassword : String;

  adminStatus : boolean = false;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.userService.loginUser(this.givenUserName).subscribe(data => { 
        this.user = data;
        
        if(this.user.userName != this.givenUserName || this.user.password != this.givenPassword){
          console.log("Wrong Credentials");
        }
    
        else{
          
          StorageService.saveUser(data);

          if(data.role == 1){
            this.router.navigate(['/admin']);
          }
          else{
            this.router.navigate(["/products"]);
          }
          
        }
      }, 
      
      error => console.log(error));  
  }

}
