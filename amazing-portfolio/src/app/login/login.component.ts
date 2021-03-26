import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 loginRef=new FormGroup({
   user:new FormControl(),
   pass:new FormControl(),
 });
 msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  checkuser(){
    console.log(this.loginRef.value);
    let username = this.loginRef.get("user")?.value;
    let passname = this.loginRef.get("pass")?.value;
    if(username=="varun" && passname=="123"){
      this.msg = "Login success"
    }else{
      this.msg ="Login Failure";
    }
  }

}
