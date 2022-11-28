import { Component, OnInit } from '@angular/core';
import {CompressionService} from "../../services/compression.service";

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor(private compressionService :CompressionService) { }

  ngOnInit(): void {
  }

  upload() {
    this.compressionService.compressAndResize().then(
      (value)=>{
        console.log(value)
      }
    )
  }
}
