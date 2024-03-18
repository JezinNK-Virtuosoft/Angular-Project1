import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {
  public workStatus:string[];
  constructor() {
    this.workStatus =[
      "Experienced",
      "Fresher"]
   }
}
