import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ContributeService {

  constructor(private http: HttpClient) { }

  addVolume(): Observable<any>{
    let body = new FormData();

    return this.http.post(`http://localhost:3000/volumes`, body)
  }
}
