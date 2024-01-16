import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HrComponent } from './components/hr/hr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HelloWorldComponent,
    ProductListComponent,
    HrComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngHandsOn';
}
