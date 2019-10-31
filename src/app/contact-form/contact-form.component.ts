import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
            firstName: ['',[Validators.required, Validators.pattern("[a-zA-Z ]*")]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['',[Validators.required,Validators.pattern("^[0-9]*.{10}$")]],
            fromcmd:['', Validators.required]
        });
        console.log("Form fields working");
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls;}

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
  }

}
