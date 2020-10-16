import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

myForm:FormGroup;
message:string="";
userError:any;

  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router) 
  {
    this.myForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(form){
   this.authService.login(form.value.email,form.value.password)
    .then((data)=>
    {
      console.log(data);
      this.message="you have been logged successfully!"
      this.router.navigate(['/myblogs'])
    }).catch((error)=>
    {
      console.log(error);
      this.userError=error;
    })
  }

}

