import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HrComponent } from './components/hr/hr.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PokeListComponent } from "./components/poke-list/poke-list.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        HelloWorldComponent,
        ProductListComponent,
        HrComponent,
        AccordionComponent,
        PokeListComponent,
        NavBarComponent
    ]
})
export class AppComponent {
  title = 'ngHandsOn';
}
