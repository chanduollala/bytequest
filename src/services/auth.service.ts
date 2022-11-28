import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any>{
    return this.http.get(`http://localhost:3000/password_auth/?username=${username}&password=${password}`)
  }

  sendOtp(phone: string, otp: string){
    let url = `https://www.fast2sms.com/dev/bulkV2?authorization=H2tzxBgrfb52vY5phLYxuC8vVQoVG8QcIjnNQMHh9AaiSxSrfwgdhG0Guaxj&sender_id=FTWSMS&route=v3&message=${otp}&numbers=${phone}`
    return this.http.get(url)
  }

  loginWithPhone(phone: string) {
    return this.http.get(`http://localhost:3000/phone_auth/?phone=${phone}`)
  }
}
