import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavComponent,
        FooterComponent,
        RouterOutlet
    ],
    templateUrl: './app.layout.html',
    styleUrl: './app.layout.scss'
})
export class AppComponent {
    title = 'cv-2';
}
