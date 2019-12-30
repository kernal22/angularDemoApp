import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation } from '@angular/common';

import {HttpRequestService} from '../services/http-request.service';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as $ from 'jquery';
import domtoimage from 'dom-to-image';

declare const kendo: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public show = true;
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
  public uploadedFiles: Array < File > ;
  constructor(private _router: Router, private _platformLocation:PlatformLocation, private _http: HttpRequestService) {

  }
  ngOnInit() {

  }
  public captureScreen() {
    let base = (this._platformLocation as any).location.origin
    window.open(base+'/register');
  }

  public fileChange(element) {
      this.uploadedFiles = element.target.files;
  }

  upload() {
    console.log(this.uploadedFiles);
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    console.log(formData);
    this._http.postCall('/api/upload', formData)
    .subscribe((response) => {
         console.log('response received is ', response);
    })
}
}
