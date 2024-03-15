import { Routes } from '@angular/router';
import { EmployerRegComponent } from './employer-reg/employer-reg.component';
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';

export const routes: Routes = [{
    path:'EmployerReg',
    component:EmployerRegComponent
},{
    path:'JobseekerReg',component:JobseekerRegistrationComponent
}];
