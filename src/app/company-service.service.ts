import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { LoginUser } from './loginUser';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  private baseURL ="http://localhost:8081/update";
  constructor(private http:HttpClient) { }
  public userRegisteration(company){
    return this.http.post("http://localhost:8081/save",company,{responseType:"text" as "json"});
  }
 
  public getUsers(){
    return this.http.get("http://localhost:8081/getAll");
  }
  public deleteUser(userName){
    return this.http.get("http://localhost:8081/delete/"+userName);
  }

  public getUserbyId(id){
    return this.http.get("http://localhost:8081/searchid/"+id);
  }
  public update(id,company):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,company);
  }
  public loginNow(loginUser) {
    return this.http.post("http://localhost:8081/login",loginUser,{responseType:"text" as "json"});
  }
}
