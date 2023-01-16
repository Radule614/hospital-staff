import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, tap } from 'rxjs';
import { GenerateReportDTO, GenerateReportsService } from './generate-reports.service';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  constructor(private service: GenerateReportsService) { }

  ngOnInit() {
  }

  form: UntypedFormGroup = new UntypedFormGroup({
    'date-from': new FormControl<Date | null>(null, Validators.required),
    'date-to': new FormControl<Date | null>(null, Validators.required)
  })

  m_Errors: string[] = [];

  GenerateUrgentReport(): void {
    this.m_Errors.length = 0;

    const dto: GenerateReportDTO = {
      dateFrom: this.form.get('date-from')?.value,
      dateTo: this.form.get('date-to')?.value,
    }


    this.form.updateValueAndValidity();
    if (!this.form.valid) return;

    this.service.GenerateUrgentReport(dto)
      .pipe(catchError(res => {
        console.log(res);
        const error = res.error;
        if (error && error.message) {
          this.m_Errors.push(error.message);
          return EMPTY;
        }
        this.m_Errors.push(error);
        return EMPTY;
      }))
      .subscribe(d => {
        var binaryData = [];
        binaryData.push(d);
        const fileUrl = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}))
        // const fileUrl = URL.createObjectURL(d);
        window.open(fileUrl);
      }
      )
  }

  GenerateTenderReport(): void {
    this.m_Errors.length = 0;

    const dto: GenerateReportDTO = {
      dateFrom: this.form.get('date-from')?.value,
      dateTo: this.form.get('date-to')?.value,
    }

    this.form.updateValueAndValidity();
    if (!this.form.valid) return;

    this.service.GenerateTenderReport(dto)
      .pipe(
        catchError(res => {
          console.log(res);
          const error = res.error;
          if (error && error.message) {
            this.m_Errors.push(error.message);
            return EMPTY;
          }
          this.m_Errors.push(error);
          return EMPTY;
        }))
      .subscribe(d => {
        var binaryData = [];
        binaryData.push(d);
        const fileUrl = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }))
        window.open(fileUrl);
      });
  }

}
