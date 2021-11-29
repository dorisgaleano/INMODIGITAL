import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UbicacionServiceService {

  constructor(private http: HttpClient) { }


  url = "http://localhost:9000";

  headers = new HttpHeaders({
    'content-type': 'application/json',
  })

  getUbicaciones() {
    return this.http.get(this.url + "/listadoUbicaciones")  
  }
}
