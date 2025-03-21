import { Component, signal } from '@angular/core';
import { RESUME } from '../../shared/constants/personal.constant';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    
    cvDetails = signal({
        firstName : 'Yaswanth Narayana',
        lastName : 'Pilla',
        role : 'Full Stack Developer',
        started : new Date('05/01/2024')
    })

    RESUME = RESUME

    get age() {
        return new Date().getFullYear() - this.cvDetails().started.getFullYear()
    }
}
