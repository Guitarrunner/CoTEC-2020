import { Injectable } from '@angular/core';
import {Patients} from 'src/app/models/hospitalCenter/patients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Patients[]=[
    new Patients(1,'Alfonso','Quesada',5249368,55,'costarricense','Alajuela','Hemorroides,Gastritis','Contagiado',
    'Nikxon', 'si','no'),
  ]

  constructor(/* private http: HttpClient */) { }
  /*  getPatients(): Observable<Patients[]> {
      return this.http.get<Patients[]>(apiUrl); */
      getPatients(): Patients[]{
        return this.patients
      }
}
