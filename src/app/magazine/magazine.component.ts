import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit, AfterViewInit {
  @ViewChild('page') page1!: ElementRef;
  @ViewChild('article1') article1!: ElementRef;
  constructor() {

  }

  pageheight = 956

  pages = [{"top": 0, "left":0, "height":0, "width": 0}]
  articles= [{"top": 20, "left":30, "height":300, "width": 40}]
  ngAfterViewInit(): void {
    console.log(this.page1.nativeElement.offsetWidth)
    this.pages[0].height=this.page1.nativeElement.offsetHeight

    this.pages[0].top=this.page1.nativeElement.offsetTop
    this.pages[0].left=this.page1.nativeElement.offsetLeft
    this.pages[0].width=this.page1.nativeElement.offsetWidth

    console.log(this.pages)

    this.article1.nativeElement.style.height = this.articles[0].height * this.pages[0].height/this.pageheight
    this.article1.nativeElement.style.width = this.articles[0].width * this.pages[0].height/this.pageheight
    this.article1.nativeElement.style.top = this.articles[0].top * this.pages[0].height/this.pageheight
    this.article1.nativeElement.style.left = this.articles[0].left * this.pages[0].height/this.pageheight
  }

  ngOnInit(): void {
  }

}
