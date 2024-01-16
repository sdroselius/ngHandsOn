import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.css'
})
export class HrComponent {
  employee: Employee = new Employee();
  locations = ['Los Angeles', 'Austin', 'Kansas City', 'Denver']
  onSubmit(emp: Employee) {
    console.log(emp);
    // TODO: XHR POST request to create employee
  }
}
