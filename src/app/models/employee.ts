export class Employee {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  hireDate: string;
  isFullTime: boolean;

  constructor(
    firstName: string = '',
    lastName: string = '',
    age: number = 0,
    location: string = '',
    hireDate: string = '',
    isFullTime: boolean = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.hireDate = hireDate;
    this.isFullTime = isFullTime;
  }
}
