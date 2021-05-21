import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor(public http: HttpClient) { }

  get(){
    return this.http.get<any>("http://localhost:5000/api/Gestor");
  }
}
