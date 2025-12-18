import { Component, ViewChild } from '@angular/core';
import { MainNavigation } from "../../components/main-navigation/main-navigation";
import { AddEmployeeModal } from '../../add-employee-modal/add-employee-modal';
import { AppwriteService } from '../../service/appwrite-service';

@Component({
  selector: 'app-add-employee',
  imports: [MainNavigation, AddEmployeeModal],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss',
})
export class AddEmployee {
  showModal = false;
  employeeList: any[] = [];
  searchTerm: string = '';

  constructor(private appwrite: AppwriteService) { };

  async ngOnInit() {
    const result = await this.appwrite.getEmployees();
    this.employeeList = result.rows;
  }

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

  get filteredEmployees() {
    if (!this.searchTerm) {
      return this.employeeList;
    }

    const term = this.searchTerm.toLowerCase();

    return this.employeeList.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.lastName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.department.toLowerCase().includes(term) ||
      emp.position.toLowerCase().includes(term)
    );
  }


  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

}
