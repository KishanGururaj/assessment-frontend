import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/company';
import { CompanyServiceService } from 'src/app/company-service.service';
import { LoginUser } from 'src/app/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser :LoginUser =new LoginUser();
  msg:any;
  constructor(private service:CompanyServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  public login(){
    let response = this.service.loginNow(this.loginUser)
    response.subscribe(data =>{
      this.msg=data;
     })
     console.log(this.msg.value)
     if(this.msg=="Login SuccessFully"){
      this.router.navigateByUrl('/allemployees');
     }
     
   }


}
