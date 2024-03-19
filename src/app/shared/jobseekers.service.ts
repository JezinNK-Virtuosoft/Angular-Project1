import { Injectable } from '@angular/core';
import { Jobseekers } from './jobseekers';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {
  public workStatus:string[];
  public regex:{[key:string]:string};
  formData:Jobseekers=new Jobseekers();
  url:string=environment.apiBaseurl;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) {
    this.workStatus =[
      "Experienced",
      "Fresher"]
      this.regex={
        Nameregex:'[A-Z][a-z]*',
        FirstChar:'[A-Z]',
        Digits:'\\d',
        Whitespace:'\\s',
        PhoneNumber:'[6-9]\\d{9}',
        FirstPhoneDigit:'[6-9]',
        Email:'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
      }
   }
   addJobseeker(Jobseeker:Jobseekers):Observable<any>{
    return this.httpClient.post(this.url+'Registration',Jobseeker).pipe( catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }));
   }
   
}
