import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL_LOGIN = `http://localhost:9000/login`;

@Injectable({
  providedIn: 'root'
})
export class ServicioGlobalService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9000";

  headers = new HttpHeaders({
    /* 'Content-Type': 'application/x-www-form-urlencoded' */
    'content-type': 'application/json',
  })

  /*headers = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  };*/


  getInmuebles() {


    this.http.get(this.url + "/consultaInmuebles", {headers: this.headers}).subscribe(data => {
    })

  }

  login(user: any): Observable<any> {

    return this.http.post(this.url + "/login", user, {headers: this.headers});
  }

}

