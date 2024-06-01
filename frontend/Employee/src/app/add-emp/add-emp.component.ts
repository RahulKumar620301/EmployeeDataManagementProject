import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {empService} from '../empService'

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
msg=""

empForm:FormGroup;

constructor(private fb: FormBuilder, private srvc:empService) { 

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
 this.srvc.saveemp(this.empForm.value).subscribe(result=>{
  this.msg=result.response;
  if(result.st==1)
    this.empForm.reset();
  })}
}
