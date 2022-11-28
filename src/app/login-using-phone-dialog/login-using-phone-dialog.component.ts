import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";


@Component({
  selector: 'app-login-using-phone-dialog',
  templateUrl: './login-using-phone-dialog.component.html',
  styleUrls: ['./login-using-phone-dialog.component.css']
})
export class LoginUsingPhoneDialogComponent implements OnInit {
  private enteredOtp: string | undefined;
  private generatedOtp: string | undefined;
  otpSent: boolean = false;

  constructor(private formBuilder : FormBuilder, private authService : AuthService, public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  loginInfo= this.formBuilder.group({
      phone : ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]{10}')])]
    }
  )

  login() {
    if (this.enteredOtp==this.generatedOtp){
      console.log("OTP verified")
      this.authService.loginWithPhone(this.loginInfo.get('phone')!.value!).subscribe(
        (response) =>{
          console.log(response)
          // @ts-ignore
          if (response["username"]){
            sessionStorage.setItem('logged_in', "YES")
            // @ts-ignore
            sessionStorage.setItem('username', response["username"])
            window.location.reload()
          }
        }
      )


      console.log("Login successful")
      this.dialog.closeAll()

    }
    else {
      console.log("Incorrect otp")
    }
  }

  onOtpChange($event: string) {
    this.enteredOtp = $event
  }

  sendOTP() {
    this.generatedOtp = (Math.floor(Math.random() * (999999 -100000 + 1)) + 100000).toString();
    this.authService.sendOtp(this.loginInfo.get('phone')!.value!, this.generatedOtp).subscribe(
      (response)=>{
        // @ts-ignore
        if (response["return"]==true){
          this.otpSent=true
        }
      }
    )
  }

  openLoginDialog() {
    this.dialog.closeAll()

    const dialogRef = this.dialog.open(LoginDialogComponent, {
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
