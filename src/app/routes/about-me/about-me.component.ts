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
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services', 'Sockets'
            ],
            description : 'In the CRM Construction Management project, I played a key role in developing and enhancing the system. One of my primary contributions was creating reusable components, which significantly improved code efficiency and maintainability. These components helped streamline the development process, enabling faster feature integration and reducing redundancy across the platform. I was also responsible for implementing several new features that aligned with business requirements, enhancing the overall functionality of the system. As the project evolved, I adapted to changing business logic, ensuring that the platform met updated expectations. This required not only modifying existing workflows but also designing new logic to better support the objectives of the business. Throughout this process, I worked closely with the team lead, who provided valuable guidance. I took ownership of several key changes, successfully revamping the existing flow to improve performance and functionality, while adhering to the overall project goals. Moreover, I collaborated effectively with my team, maintaining open communication and contributing to discussions that influenced the technical direction of the project. This teamwork was instrumental in ensuring the project’s success, as it allowed us to deliver solutions that were both efficient and aligned with the larger business strategy.'
        }, {
            name : 'InnCircles Connect',
            sub : 'Customer Portal where users can view and update their personal details, track the progress of their flat, and stay informed about important updates related to their property.',
            key : 'inn-connect',
            tech : [
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services', 'Sockets'
            ],
            description : 'In the InnCircles Connect project, I focused on enhancing the customer experience by developing a robust and user-friendly portal. My contributions revolved around streamlining the platform, ensuring customers could effortlessly view and update their details while tracking the progress of their flats in real time. To achieve this, I designed and implemented efficient workflows that improved system responsiveness and usability. I also played a vital role in optimizing backend interactions, reducing load times, and ensuring seamless data synchronization. As new business requirements emerged, I adapted quickly, refining logic and incorporating necessary changes to maintain platform efficiency and relevance. Beyond coding, I collaborated closely with the team to identify potential improvements, troubleshoot challenges, and introduce scalable solutions. My ability to adapt to evolving needs and proactively address technical bottlenecks helped create a more intuitive and high-performing system, ultimately enhancing customer engagement and satisfaction.'
        }, {
            name : 'InnCircles Homes',
            sub : 'HOMES is a gated community management system that streamlines security services and simplifies resident management.',
            key : 'inn-homes',
            tech : [
                'Angular', 'Node Js', 'Express Js', 'MongoDB', 'TypeScript', 'AWS Lambda Services', 'Sockets'
            ],
            description : ''
        }, {
            name : 'RestoBar-B',
            sub : 'An online platform for booking dine-out experiences at restobars.',
            key : 'meta-resto',
            tech : [
                'React', 'Node Js', 'Express Js'
            ],
            description : 'Developed the platform using React, building dynamic UI components and managing state efficiently. Collaborated with the team using Git, actively participating in discussions, contributing to the development process, and learning best practices from experienced team members.'
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
