import { Injectable } from '@angular/core';
import { States} from 'src/app/models/administration/states';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  states: States[]=[
    new States(1,'Activo'),
    new States(2,'muerto'),
    new States(3,'Contagiado'),
    new States(4,'Recuperado'),
  ]

  constructor(/* private http: HttpClient */) { }
   /*  getStates(): Observable<States[]> {
      return this.http.get<States[]>(apiUrl); */
      getStates(): States[]{
        return this.states
      }
}
