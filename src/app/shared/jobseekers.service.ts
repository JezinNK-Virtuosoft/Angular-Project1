import { Injectable } from '@angular/core';
import { Jobseekers } from './jobseekers';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {
  public workStatus:string[];
  public regex:{[key:string]:RegExp};
  formData:Jobseekers=new Jobseekers();
  url:string=environment.apiBaseurl;
  constructor(private httpClient:HttpClient) {
    this.workStatus =[
      "Experienced",
      "Fresher"]
      this.regex={
        Nameregex:/^[A-Z][a-z]*$/,
        FirstChar:/^[A-Z]/,
        Digits:/\d/,
        Whitespace:/\s/,
        PhoneNumber:/^[6-9]\d{9}$/,
        FirstPhoneDigit:/^[6-9]/,
        Email:/^[a-zA-Z0-9._%+-]+@@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      }
   }
   addJobseeker(){
    return this.httpClient.post(this.url+'Registration',this.formData);
   }
}
