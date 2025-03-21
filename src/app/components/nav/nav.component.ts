import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
        RouterModule
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    showMenu = signal<boolean>(false)

    toggleMenu() {
        this.showMenu.set(!this.showMenu())
    }
}
