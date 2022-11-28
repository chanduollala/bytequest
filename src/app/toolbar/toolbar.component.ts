import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLoggedIn: string = 'NO';
  public isCollapsed = true;
  constructor( public dialog: MatDialog) {
    this.isLoggedIn=sessionStorage.getItem('logged_in')!
  }

  ngOnInit(): void {
  }
}
