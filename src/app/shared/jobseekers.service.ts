import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {
  public workStatus:string[];
  public regex:{[key:string]:RegExp};
  constructor() {
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
}
