import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployerRegComponent } from "./employer-reg/employer-reg.component";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, EmployerRegComponent, CommonModule, NgbModule, HeaderComponent, LayoutComponent]
})
export class AppComponent {
  title = 'JobPortal';
}
