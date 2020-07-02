import { Injectable } from '@angular/core';
import {Pathologies} from 'src/app/models/administration/pathologies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class PathologiesService {
  pathologies: Pathologies[]=[
    new Pathologies(1,'Cancer', 'Malestar general','Fiebre','Quimioterapia'),
    new Pathologies(1,'Hipertension', 'Malestar general','Mareos','pastillas'),
  ]

  constructor(/* private http: HttpClient */) { }
    /*  getPathologies(): Observable<Pathologies[]> {
      return this.http.get<Pathologies[]>(apiUrl); */
      getPathologies(): Pathologies[]{
        return this.pathologies
      }
}
