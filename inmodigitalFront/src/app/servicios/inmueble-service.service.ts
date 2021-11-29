import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InmuebleServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9000";

  headers = new HttpHeaders({
    /* 'Content-Type': 'application/x-www-form-urlencoded' */
    'content-type': 'application/json',
  })

  getInmuebles() {

    return this.http.get(this.url + "/consultaInmuebles")  

  }
}
