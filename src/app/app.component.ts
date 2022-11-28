import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public get isLoggedIn(): string {
    return sessionStorage.getItem('logged_in') || "NO";
  }
  title = 'codefiesta-web';

  constructor() {

  }





}
