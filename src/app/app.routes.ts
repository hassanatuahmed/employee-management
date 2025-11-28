import { Routes } from '@angular/router';
import { AddEmployee } from './employee/add-employee/add-employee';
import { DashboardComponent } from './dashboard/dashboard-component/dashboard-component';
import { AddDepartment } from './department/add-department/add-department';

export const routes: Routes = [
    { path: '', component: DashboardComponent },

    { path: 'employee', component: AddEmployee },
    { path: 'department', component: AddDepartment },


    { path: '**', redirectTo: '' }


];
