import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-signup-module',
  templateUrl: './signup-module.component.html',
  styleUrls: ['./signup-module.component.css']
})
export class SignupModuleComponent implements OnInit {
  SignupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    $('input[type=password]').keyup(function() {
    var pswd = $(this).val();
     //console.log(pswd,pswd.length)

    //validate the length
    if ( pswd.length < 8 ) {
    $('.length').removeClass('valid').addClass('invalid');
    } else {
        //alert("password len > 8")
    $('.length').removeClass('invalid').addClass('valid');
    }

    //validate letter
    if ( pswd.match(/[A-z]/) ) {
    $('.letter').removeClass('invalid').addClass('valid');
    } else {
    $('.letter').removeClass('valid').addClass('invalid');
    }

    //validate capital letter
    if ( pswd.match(/[A-Z]/) ) {
    $('.capital').removeClass('invalid').addClass('valid');
    } else {
    $('.capital').removeClass('valid').addClass('invalid');
    }

    //validate number
    if ( pswd.match(/\d/) ) {
    $('.number').removeClass('invalid').addClass('valid');
    } else {
    $('.number').removeClass('valid').addClass('invalid');
    }
    })

    .focus(function(){$('.message').show();})
    .blur(function() {$('.message').hide();});

      this.SignupForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
        lastName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).{8,30}$/)]],
        });
        console.log("Form fields working");
    }

    // convenience getter for easy access to form fields
    get f() { return this.SignupForm.controls;}

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.SignupForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SignupForm.value, null, 4));
    }

  //   onReset() {
  //       this.submitted = false;
  //       this.SignupForm.reset();
  // }

}
