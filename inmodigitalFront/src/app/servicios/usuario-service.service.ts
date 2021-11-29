import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9000";

  headers = new HttpHeaders({
    'content-type': 'application/json',
  })

  registrarUsuario(user: any): Observable<any> {

    return this.http.post(this.url + "/registrarUsuario", user, {headers: this.headers});
  }
}
