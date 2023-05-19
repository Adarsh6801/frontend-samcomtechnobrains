import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailSheduleService } from 'src/app/service/email-shedule.service';
import { EmailSchedule } from '../../interfaces/email-shedule.interface'

@Component({
  selector: 'app-user-shedule',
  templateUrl: './user-shedule.component.html',
  styleUrls: ['./user-shedule.component.css']
})
export class UserSheduleComponent implements OnInit {
  filterForm: FormGroup;
  email!: EmailSchedule[];
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: EmailSheduleService) {
    this.filterForm = this.formBuilder.group({
      startDate: [''], // Initial value for start date
      endDate: [''] // Initial value for end date
    });
  }
  ngOnInit(): void {
    this.getAllScheduledEmail()
  }
  //open modal
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onSubmit() {
    // Handle form submission
    if (this.filterForm.valid) {
      const startDateValue = this.filterForm.value.startDate;
      const endDateValue = this.filterForm.value.endDate;
    const  filterdate={
        startDate:startDateValue,
        endDate: endDateValue
      }
      this.service.filterEmail(filterdate).subscribe((response:any)=>{
        this.email=response.email
      })

    }
  }

  // get all scheduled emails
  getAllScheduledEmail() {
    this.service.getAllEmailShedule().subscribe((response: any) => {
      this.email = response.emails
    })
  }


}
