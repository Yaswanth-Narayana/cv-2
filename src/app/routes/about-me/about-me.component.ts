import { AfterViewInit, Component, signal, ElementRef, viewChild } from '@angular/core';
import { RESUME, EDUCATION, EXPERIENCE } from '../../shared/constants/personal.constant';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [
        DatePipe
    ],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {

	elementRef = viewChild<ElementRef<HTMLDivElement> >('scrollview');

	active = signal<'bio' | 'experience' | 'work'>('bio')

    RESUME = RESUME

    EDUCATION = EDUCATION

    EXPERIENCE = EXPERIENCE

    productDetails = [
        {
            name : 'InnCircles CRM',
            sub : 'CRM is Construction Management service offers customer relation management & Billing for Executives.',
            key : 'inn-crm',
            tech : [
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services'
            ],
            description : 'In the CRM Construction Management project, I played a key role in developing and enhancing the system. One of my primary contributions was creating reusable components, which significantly improved code efficiency and maintainability. These components helped streamline the development process, enabling faster feature integration and reducing redundancy across the platform. I was also responsible for implementing several new features that aligned with business requirements, enhancing the overall functionality of the system. As the project evolved, I adapted to changing business logic, ensuring that the platform met updated expectations. This required not only modifying existing workflows but also designing new logic to better support the objectives of the business. Throughout this process, I worked closely with the team lead, who provided valuable guidance. I took ownership of several key changes, successfully revamping the existing flow to improve performance and functionality, while adhering to the overall project goals. Moreover, I collaborated effectively with my team, maintaining open communication and contributing to discussions that influenced the technical direction of the project. This teamwork was instrumental in ensuring the project’s success, as it allowed us to deliver solutions that were both efficient and aligned with the larger business strategy.'
        }, {
            name : 'InnCircles Connect',
            sub : '',
            key : 'inn-connect',
            tech : [
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services'
            ],
            description : ''
        }, {
            name : 'InnCircles Homes',
            sub : 'HOMES is a gated community management system that streamlines security services and simplifies resident management.',
            key : 'inn-homes',
            tech : [
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services'
            ],
            description : ''
        }, {
            name : 'RestoBar-B',
            sub : 'An online platform for booking dine-out experiences at restobars.',
            key : 'meta-resto',
            tech : [
                'React', 'Node Js', 'Express Js'
            ],
            description : ''
        }
    ]

	ngAfterViewInit(): void {
        this.elementRef()?.nativeElement.addEventListener('scroll', (e: any) => {
            const childs = [...e.target.children].map((data) => {
                return {
                    id: (data as HTMLElement).id,
                    height: (data as HTMLElement).offsetHeight
                }
            });
            
            const scrollHeight = e.target.scrollTop;

            let position = 0;
            let positionScroll = scrollHeight;

            for(const { id, height } of childs) {
                if(positionScroll > height) {
                    positionScroll -= height;
                    position++;
                } else {
                    if(height - positionScroll < height / 2) {
                        position++;
                    }
                    break;
                }
            }

            this.active.set(childs[position].id as 'bio' | 'experience' | 'work');
        });
    }

	goTo(htmlId: string) {
		const element = document.getElementById(htmlId);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}

    get age() {
        return new Date().getFullYear() - new Date('09/04/2003').getFullYear()
    }

}
