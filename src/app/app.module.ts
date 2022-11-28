import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginUsingPhoneDialogComponent } from './login-using-phone-dialog/login-using-phone-dialog.component';
import {NgOtpInputModule} from "ng-otp-input";
import {AppRoutingModule} from "../routing/app-routing.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxCaptchaModule} from "ngx-captcha";
import {MatSelectModule} from "@angular/material/select";
import { ContributeComponent } from './contribute/contribute.component';
import { LoggedInDialogComponent } from './logged-in-dialog/logged-in-dialog.component';
import { MagazineComponent } from './magazine/magazine.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    LoginDialogComponent,
    DashboardComponent,
    LoginUsingPhoneDialogComponent,
    ToolbarComponent,
    ContributeComponent,
    LoggedInDialogComponent,
    MagazineComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgOtpInputModule,
        NgbModule,
        FlexLayoutModule,
        NgxCaptchaModule,
        MatSelectModule,
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
