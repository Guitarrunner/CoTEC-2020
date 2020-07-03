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


      
      /*Metodo para mandar info al api*/ 
  /** sendData( name,lastName,patientId,age,nationality,region,pathologies,states,medication,intern,uci) {

    return this.http.post('http://localhost:3000/cliente_cliente', { nombre: name, apellido: lastName, cedula: patientId, 
    edad: age, nacionalidad: nationality, region: region, patologias: pathologies, estados: states, medicacion: medication, internado: intern
    uci: uci).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      });
  } */


  /**Metodo para eliminar */
  /**delete(id) {

    return this.http.delete('http://localhost:3000/cliente_cliente/' + id).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }

 */

 /**Metodo para modificar */
 /**  modificar(id,name,lastName,patientId,age,nationality,region,pathologies,states,medication,intern,uci) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, { nombre: name, apellido: lastName, cedula: patientId, 
    edad: age, nacionalidad: nationality, region: region, patologias: pathologies, estados: states, medicacion: medication, internado: intern
    uci: uci).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  } */
}
