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

      
  /*Metodo para mandar info al api*/ 
  /** sendData( name, description,symptoms, treatment) {

    return this.http.post('http://localhost:3000/cliente_cliente', { nombre: name, descripcion: description, sintomas: symptoms, 
    tratamiento: treatment).subscribe(
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
 /**  modificar(id, name, description,symptoms, treatment) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, { nombre: name, descripcion: description, sintomas: symptoms, 
    tratamiento: treatment).subscribe(
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
