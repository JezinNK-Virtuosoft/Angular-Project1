import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import $ from 'jquery'
import { JobseekersService } from '../shared/jobseekers.service';
import { Jobseekers } from '../shared/jobseekers';

@Component({
  selector: 'app-jobseeker-registration',
  standalone: true,
  imports: [NgbModule,CommonModule,FormsModule],
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.scss'
})
export class JobseekerRegistrationComponent implements OnInit {
  isFormSummited:boolean=false; 
  workStatus:string[];
   minDate:string='';
   maxDate:string='';
   Jobseeker:Jobseekers;
   regex:{[key:string]:RegExp};
  constructor(private jobseekerServices:JobseekersService)
  {
    this.workStatus =this.jobseekerServices.workStatus;
    this.regex=jobseekerServices.regex;
    console.log(this.regex);
    console.log(this.regex['Nameregex'])
    this.Jobseeker=new Jobseekers();

  }
  ngOnInit():void{
    
   console.log('Initializing');
   
   const currentDate:Date=new Date();
   console.log(currentDate);
   this.minDate=this.formatedDate(new Date(currentDate.getFullYear()-55,currentDate.getMonth(),currentDate.getDate()));
    this.maxDate=this.formatedDate(new Date(currentDate.getFullYear()-18,currentDate.getMonth(),currentDate.getDate()));
    console.log(this.minDate,this.maxDate);
    console.log("Default Date:",this.Jobseeker.DateOfBirth);
  }
  formatedDate(date:Date):string{
    
    const year=date.getFullYear();
    const month=('0'+(date.getMonth()+1)).slice(-2);
    const day=('0'+(date.getDate())).slice(-2);
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }
  onSubmit(form:NgForm){
    this.isFormSummited=true;
  }
}
