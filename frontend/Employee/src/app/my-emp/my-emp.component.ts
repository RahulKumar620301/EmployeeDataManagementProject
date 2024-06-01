import { Component } from '@angular/core';
import {empService} from '../empService';
import{empInterface} from '../empInterface';

@Component({
  selector: 'app-my-emp',
  templateUrl: './my-emp.component.html',
  styleUrls: ['./my-emp.component.css']
})
export class MyEmpComponent {
  dmsg=""
  data:any;

constructor(private srvc:empService) { 
this.srvc.getemp().subscribe(result=>{
  this.data=result;
})}




del(id:string){
this.srvc.deleteemp(id).subscribe(result=>{
this.dmsg=result.response;
if(result.st==1)
this.srvc.getemp().subscribe(result=>{this.data=result})
})
}
}

