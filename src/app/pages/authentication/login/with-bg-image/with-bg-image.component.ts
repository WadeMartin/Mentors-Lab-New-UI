import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  //#region Login Properties
  public Email;
  public Password;
  public isFail = false;
  icon = "icofont icofont-login";
//#endregion

  ngOnInit() {
  }

  login(event){
    this.icon = "fa fa-cog fa-spin";
    let loginObject = {
      "Email": this.Email,
      "Password": this.Password
    }
    this.loginService.login(loginObject).subscribe(
      (res: any) =>{
        if(res !== null){
          localStorage.setItem("currentUser",res.username);
          localStorage.setItem("type",res.type);
          this.router.navigate(['home']);
        }
        else{
          
        }
      },
      err => { },
      () =>{

  
        }
    )
  }

}
