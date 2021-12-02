import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  registrarUbicacion(ubicacion: any): Observable<any> {

    return this.http.post(this.url + "/RegistrarUbicacion", ubicacion, {headers: this.headers});
  }
}
