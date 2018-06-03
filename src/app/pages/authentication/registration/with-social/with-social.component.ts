import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/message';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {

  constructor(private fb: FormBuilder,private loginService:LoginService, private router: Router) { }
  userform: FormGroup = this.fb.group({});
  termsAndConds;

  public Username;
  public Password;
  public Email;
  isFormValid = true;
  icon = "fa fa-user-plus";
  usernameError: Message[] = [];


  ngOnInit() {
   this.buildForm();
  }

  buildForm(){

    this.userform = this.fb.group({
      'Username': new FormControl('', Validators.required),
      'Email': new FormControl('',[Validators.required,Validators.pattern(new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'))]),
      'Password': new FormControl('', Validators.required),
      'AccountType': new FormControl('', Validators.required),
      'termsAndConds': new FormControl('', Validators.requiredTrue)
  });
}


login(value:any){
  this.usernameError = [];
  this.icon = "fa fa-cog fa-spin";

    let login = value;
    this.loginService.validateEmail(login).subscribe(
      (res:any ) => {
        console.log(res._body);
        if(res._body === null){
          this.isFormValid = true;
        }
        else{
          this.usernameError.push({severity:'error', summary:'Error Message', detail:"E-mail already exists"});
          this.isFormValid = false;
        }
      
      }, 
    err=>{
      this.usernameError = [];
      this.usernameError.push({severity:'error', summary:'Error Message', detail:"Ensure the fields are filled"});
    },
    () =>{
      this.loginService.validateUsername(login).subscribe(
        (res:any ) => {
          console.log(res._body);
          if(res._body === null){
            this.isFormValid = true;
          }
          else{
            this.usernameError.push({severity:'error', summary:'Error Message', detail:"Username is already taken"});
            this.isFormValid = false;
          }
        },
        err=>{
          this.usernameError = [];
          this.usernameError.push({severity:'error', summary:'Error Message', detail:"Ensure the fields are filled"});
        },
        ()=>{
          if(this.isFormValid){
            this.loginService.createLogin(login).subscribe(
              (res:any) =>{
      
              },
              (err) =>{
                this.icon = "fa fa-user-plus";
              },
              ()=>{
                this.icon = "fa fa-user-plus";
                this.actuallyLogin(value);
                
              }
            )
          }
          else{
            this.icon = "fa fa-user-plus";
          }
        }
      )
    }
    )
  
}

  
actuallyLogin(value : any){
  let loginObject = value;
  console.log(loginObject);
  this.loginService.login(loginObject).subscribe(
    (res: any) =>{
      if(res._body !== null){
        localStorage.setItem("currentUserToken",res.token);
        localStorage.setItem("currentUser",res.username);
        localStorage.setItem("type",res.type);
        
      }
      else{

      }
    },
    err => { 
      
      this.usernameError = [];
      this.usernameError.push({severity:'error', summary:'Error Message', detail:"E-mail already exists"});},
      () =>{
        this.router.navigate(['home']);
      }
  )
}




}
