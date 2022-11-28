import { Injectable } from '@angular/core';
import {DataUrl, NgxImageCompressService,  UploadResponse} from 'ngx-image-compress';

@Injectable({
  providedIn: 'root'
})
export class CompressionService {

  constructor(private imageCompressor: NgxImageCompressService) { }


  compressAndResize(){
    return this.imageCompressor
      .uploadFile()
      .then(
        async ({image, orientation} : UploadResponse) =>{
          console.warn("Size before : ", this.imageCompressor.byteCount(image));
          console.warn("resizing and compressing to w-400 h-400");
          let compressedImage;
          await this.imageCompressor
            .compressFile(image, orientation, 50, 50, 400, 400)
            .then(
              (result: DataUrl) =>{
                console.warn(
                  'Size after : ', this.imageCompressor.byteCount(result)
                );
                compressedImage=result;
              }
            )
          console.log( compressedImage);
          return compressedImage
        }
      );
  }
}
