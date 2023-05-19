import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private formBuilder: FormBuilder) {}
  emailForm!: FormGroup;
  submitted:boolean=false;
  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      dateTime: ['',]
    });
  }
  onFormSubmit(){
    this.submitted=true
    console.log(this.emailForm.value);
    
  }
}
