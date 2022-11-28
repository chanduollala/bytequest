import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }


  updateImage(username: string): Observable<any>{
    let response = this.http.get(`http://localhost:3000/user_detail/${username}/`)
    return response
  }


}
