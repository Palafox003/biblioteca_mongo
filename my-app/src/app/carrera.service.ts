import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Carrera } from './carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private carrerasUrl = 'http://localhost:3900/carreras';  // URL to web api
  private ncarrerasUrl='http://localhost:3900/carreras/3';
  constructor(private http: HttpClient) { }

  /** GET carreras from the server */
  getCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.carrerasUrl);
  }
  // GET N numero de carreras
  getNcarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.ncarrerasUrl);
  }
}
