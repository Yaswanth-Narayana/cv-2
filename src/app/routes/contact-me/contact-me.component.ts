import { Component } from '@angular/core';
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

	constructor(private fb : FormBuilder) {
		this.contactForm = fb.group({
			name : new FormControl<string>('',[Validators.required]),
			email : new FormControl<string>('',[Validators.required, Validators.email]),
			message : new FormControl<string>('',[Validators.required])
		})
	}


	sendMessage() {
		if(this.contactForm.valid) {

		} else {

		}
	}
}
