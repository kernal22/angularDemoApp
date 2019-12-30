import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
declare const kendo: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  public conditionArray = [
    {"main": "Defination", reasons: [
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'}
    ]},
    {"main": "Terms of the loan", reasons: [
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'}
    ]},
    {"main": "Repayment", reasons: [
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'},
      {reason: '“Application Form” means, as the context may permit, the credit facility application for including online application form submitted by the Borrower to the Lender for applying for the Facility, together with the Preliminary Credit Appraisal and all other information clarifications and declarations, if any, furnished by the borrower or any other persons from time to time in connection with the Facility.'}
    ]}
  ];
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      "name": [null, [Validators.required]],
      "email": [null, [Validators.required, Validators.email]],
      "mobile": [null, [Validators.required]],
      "username": [null, [Validators.required]],
      "password": [null, [Validators.required]]
    });
  }
  onSubmit() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log(`field can't be blank`);
    }
  }

  captureScreen() {
    var node = document.getElementById('contentToConvert');
    console.log(node);

    kendo.drawing
     .drawDOM("#myCanvas",
     {
         paperSize: "A4",
         margin: { top: "1cm", bottom: "1cm" },
         scale: 0.5,
         height: 500
     })
         .then(function(group){
         kendo.drawing.pdf.saveAs(group, "Exported.pdf")
     });
  }
}
