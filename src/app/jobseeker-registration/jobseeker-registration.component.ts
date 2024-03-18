import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
   workStatus:string[];
   currentDate:Date;
   minDate:Date;
   maxDate:Date;
   Jobseeker:Jobseekers;
  constructor(private jobseekerServices:JobseekersService)
  {
    this.workStatus =this.jobseekerServices.workStatus;
    this.currentDate=new Date();
    this.minDate=new Date(this.currentDate.getFullYear()-55,this.currentDate.getMonth(),this.currentDate.getDate());
    this.maxDate=new Date(this.currentDate.getFullYear()-18,this.currentDate.getMonth(),this.currentDate.getDate());
    this.Jobseeker=new Jobseekers();
  }
  ngOnInit():void{
    
   console.log('Initializing');
   console.log(this.minDate,this.maxDate) 
   
   $('#DateOfBirth').attr('min',this.minDate.toISOString().split('T')[0]);
   $('#DateOfBirth').attr('max',this.maxDate.toISOString().split('T')[0]);
   $('#DateOfBirth').attr('placeholder','dd/mm/yyyy');
   $('#DateOfBirth').val('');
  }
  
}
