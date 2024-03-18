import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employer-reg',
  standalone: true,
  imports: [FormsModule,NgbModule],
  templateUrl: './employer-reg.component.html',
  styleUrl: './employer-reg.component.scss'
})
export class EmployerRegComponent {

}
