import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  header = 'Overview';
  person = {
    fname: 'Veronica',
    lname: 'Kessel',
    age: 32,
    stateOfBirth: 'New Mexico'
  };





}
