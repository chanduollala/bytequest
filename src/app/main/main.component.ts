import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  targetDate = new Date("2023-01-01 00:00:00");
  now = new Date().getTime();

  // @ts-ignore
  diffMs = this.targetDate - this.now;

  public get isLoggedIn(): boolean {
    return (sessionStorage.getItem('logged_in') || "NO") == "YES";
  }

  @ViewChild('days', { static: true }) days: ElementRef | undefined;
  @ViewChild('hours', { static: true }) hours: ElementRef | undefined;
  @ViewChild('minutes', { static: true }) minutes: ElementRef | undefined;
  @ViewChild('seconds', { static: true }) seconds: ElementRef | undefined;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      !isNaN(this.days!.nativeElement.innerText)
        ? (this.days!.nativeElement.innerText = Math.floor(this.diffMs / 86400000))
        : (this.days!.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.now = new Date().getTime();
    // @ts-ignore
    this.diffMs = this.targetDate - this.now;
    this.days!.nativeElement.innerText = Math.floor(this.diffMs / 86400000);
    this.hours!.nativeElement.innerText = Math.floor((this.diffMs % 86400000) / 3600000);
    this.minutes!.nativeElement.innerText = Math.round(((this.diffMs % 86400000) % 3600000) / 60000);
    this.seconds!.nativeElement.innerText = Math.round(((this.diffMs % 86400000) % 3600000 % 60000) / 1000);
  }

  ngOnInit(): void {
  }

}
