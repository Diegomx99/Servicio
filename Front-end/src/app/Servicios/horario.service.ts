import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(public http:HttpClient) { }

  getDia( idAula, fecha){
    return this.http.get<any>( `http://localhost:5000/api/horario/${ idAula }/${ fecha }`)
  }
}
