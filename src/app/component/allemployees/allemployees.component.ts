import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/company';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  public users:any;
  searchtext:string;
  msg:any;
  constructor(private companyService :CompanyServiceService,private router: Router) { }

  ngOnInit(): void {
    //this.getCompany();
    this.companyService.getUsers().subscribe(data =>{
      this.users = data;
    })
  }
    
 public removeUser(userName){
  let response = this.companyService.deleteUser(userName);
    response.subscribe(data => this.msg = data);
    this.router.navigateByUrl('/allemployees');
  }
 
 


// private getCompany(){
//   this.companyService.getUsers().subscribe(data =>{
//     this.users = data;
//   })
//}


public updateUser(id:number,company:Company){
  this.router.navigate(['update',id]);
 }


}
