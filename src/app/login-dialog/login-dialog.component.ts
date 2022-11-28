import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {LoginUsingPhoneDialogComponent} from "../login-using-phone-dialog/login-using-phone-dialog.component";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'dark';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type!: 'image' | 'audio';

  handleSuccess(data: any) {
    console.log(data);
  }

  loginInfo= this.formBuilder.group({
      rollNo : ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('1602-[0-9]{2}-73[0-9]-[0-9]{3}')])],
      password : ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      recaptcha: ['', Validators.required]

    }
  )


  login(){
    this.authService.login(this.loginInfo.get('rollNo')?.value! , this.loginInfo.get('password')?.value!).subscribe(
      (response) =>{
        console.log(response)
        if (response["username"]){
          sessionStorage.setItem('logged_in', "YES")
          // @ts-ignore
          sessionStorage.setItem('username', response["username"])
          window.location.reload()
        }
      }
    )
  }

  openPhoneDialog() {
    this.dialog.closeAll()

    const dialogRef = this.dialog.open(LoginUsingPhoneDialogComponent, {
      width: '450px',
      height: '700px',
      maxHeight: '97%',
      maxWidth: '95%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
