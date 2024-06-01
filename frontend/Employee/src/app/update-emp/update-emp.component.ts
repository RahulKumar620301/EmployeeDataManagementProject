import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {empService} from '../empService'
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {
msg=""

empForm:FormGroup;
empId=''
constructor(private fb: FormBuilder, private srvc:empService, private route: ActivatedRoute,
  private router: Router) { 
this.route.params.subscribe(param=>{
  this.empId=param['id'];
  this.srvc.getempid(this.empId).subscribe(result=>{
      this.empForm.setValue({
firstName:result.firstName,
lastName:result.lastName,
emailId:result.emailId,
phoneNo:result.phoneNo,
dob:result.dob,
gender:result.gender
})
})

})
this.empForm = this.fb.group({
  firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  lastName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,10}')]],
  emailId: ['', [Validators.required,Validators.email]],
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  gender: ['', [Validators.required]],
  dob: ['', [Validators.required]],
  
});

}

 onSubmit() {
 this.srvc.editemp(this.empForm.value,this.empId).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.router.navigateByUrl('/my-emp')
  })}
}


