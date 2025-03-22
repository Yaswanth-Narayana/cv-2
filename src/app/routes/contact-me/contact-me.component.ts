import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-me',
	standalone: true,
	imports: [
		ReactiveFormsModule
	],
	templateUrl: './contact-me.component.html',
	styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
	contactForm !: FormGroup
	submitting = signal<boolean>(false)

	constructor(private fb : FormBuilder) {
		this.contactForm = fb.group({
			name : new FormControl<string>('',[Validators.required]),
			email : new FormControl<string>('',[Validators.required, Validators.email]),
			message : new FormControl<string>('',[Validators.required])
		})
	}


	sendMessage() {
		if(this.contactForm.valid && !this.submitting()) {
			this.submitting.set(true)
			fetch('https://api.emailjs.com/api/v1.0/email/send',
				{
					method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        service_id: 'e35ul38',
                        template_id: '8e9u22l',
                        user_id: 'sePIhO0gdfWmiof1O',
                        template_params: this.contactForm.value
                    })
				}
			).then((res) => {
				console.log(res);
			}).catch((e) => {
				console.error(e);
			}).finally(() => this.submitting.set(false));
		} else {

		}
	}
}
