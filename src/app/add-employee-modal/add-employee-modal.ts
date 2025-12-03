
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppwriteService } from '../service/appwrite-service';



@Component({
  selector: 'app-add-employee-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee-modal.html',
  styleUrl: './add-employee-modal.scss',
})
export class AddEmployeeModal {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<any>();

  employeeForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private appwrite: AppwriteService
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      contact: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  closeModal() {
    this.close.emit();

  }

  async saveEmployee() {
    if (this.employeeForm.invalid) return;

    this.loading = true;

    try {
      console.log(this.employeeForm.value);
      const result = await this.appwrite.createEmployee(this.employeeForm.value);
      this.submitForm.emit(result);
      this.close.emit();
    } catch (err) {
      console.error('Error saving employee:', err);

    } finally {
      this.loading = false;
    }
  }

}
