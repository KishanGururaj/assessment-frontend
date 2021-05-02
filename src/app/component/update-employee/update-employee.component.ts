import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/company';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  company :Company=new Company();
  msg:any;
  username:string;
  id:number;
  constructor(private comanyService:CompanyServiceService, private  route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.comanyService.getUserbyId(this.id).subscribe(data =>{
      this.msg=data;
    },error =>console.log(error));
  }
  onSubmit(){
    let response=this.comanyService.update(this.id,this.company)
    response.subscribe(data =>{
      this.msg=data;
     })
     this.router.navigate(['allemployees']);
    //  .subscribe(data =>{
    //   this.router.navigateByUrl('/allemployees');
    // }
    // ,error=>console.log(error));
  }

  public getlist(){
    this.router.navigate(['allemployees']);
    //this.router.navigateByUrl('/allemployees');
   }


}
