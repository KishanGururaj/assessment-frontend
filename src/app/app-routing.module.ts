import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllemployeesComponent } from './component/allemployees/allemployees.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'allemployees',component:AllemployeesComponent},
  {path:'login',component:LoginComponent},
  {path:'update/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
