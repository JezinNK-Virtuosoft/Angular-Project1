import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import $ from 'jquery'

@Component({
  selector: 'app-jobseeker-registration',
  standalone: true,
  imports: [NgbModule,CommonModule,FormsModule],
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.scss'
})
export class JobseekerRegistrationComponent implements OnInit {
   workStatus:string[];
  constructor()
  {
    this.workStatus =[
      "Experienced",
      "Fresher"]
  }
  ngOnInit():void{
    
   

  }
  
}
