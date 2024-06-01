import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { MyEmpComponent } from './my-emp/my-emp.component';

const routes: Routes = [
{ path: 'my-emp', component: MyEmpComponent},
{ path: 'add-emp', component: AddEmpComponent},
{ path: 'update-emp/:id', component: UpdateEmpComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
