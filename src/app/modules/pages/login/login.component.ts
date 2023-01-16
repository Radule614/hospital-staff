import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { AuthService, LoginDTO } from 'src/app/modules/pages/login/log-auth.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  m_Form: UntypedFormGroup = this.formInstance;
  m_Errors: string[] = [];
  isTrue: number = 0;
  constructor(private m_AuthService: AuthService, private m_SnackBar: MatSnackBar, private m_Router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    
    this.m_Errors.length = 0;
    const dto: LoginDTO = this.m_Form.getRawValue();
    if (!this.m_Form.valid) return;

    this.m_AuthService.login(dto)
      .subscribe(data => {
          if(data){
            if(data.Role == 2)this.m_Router.navigate(['/manager']);
            if(data.Role == 1)this.m_Router.navigate(['/hospital/examinationreport/create']);          
            this.isTrue =1
           
          }
          //alert("Hej")
      });
   
  }

  get formInstance(): UntypedFormGroup {
    return new UntypedFormGroup({
      'username': new UntypedFormControl(null, [Validators.required]),
      'password': new UntypedFormControl(null, [Validators.required])
    });
  }
}
