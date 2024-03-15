import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobseeker-registration',
  standalone: true,
  imports: [NgbModule,CommonModule],
  templateUrl: './jobseeker-registration.component.html',
  styleUrl: './jobseeker-registration.component.scss'
})
export class JobseekerRegistrationComponent {

}
