import { Component, ViewChild } from '@angular/core';
import { MainNavigation } from "../../components/main-navigation/main-navigation";
import { AddEmployeeModal } from '../../add-employee-modal/add-employee-modal';

@Component({
  selector: 'app-add-employee',
  imports: [MainNavigation,AddEmployeeModal],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss',
})
export class AddEmployee {
showModal = false; 
employeeList:any[]=[];

  openModal() {
    this.showModal = true; 
  }

  closeModal() {
    this.showModal = false; 
  }

  handleNewEmployee(data: any) {
  console.log("New employee:", data);

 
  this.employeeList.push(data);

 
  this.closeModal();
}

}
