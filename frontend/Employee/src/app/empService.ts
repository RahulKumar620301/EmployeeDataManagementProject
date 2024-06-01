import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class empService {
baseurl="http://localhost:3000/emp"

constructor(private http: HttpClient) { }

getemp(){
return this.http.get(this.baseurl)
}

getempid(id:string){
return this.http.get<any>(this.baseurl+"/"+id)
}

saveemp(data:any){
return this.http.post<any>(this.baseurl,data)
}

editemp(data:any,id:string){
return this.http.patch<any>(this.baseurl+"/"+id,data)
} 
   
deleteemp(id:string){
  return this.http.delete<any>(this.baseurl+'/'+id)
}

}
