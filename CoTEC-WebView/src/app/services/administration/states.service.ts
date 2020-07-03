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

      
  /*Metodo para mandar info al api*/ 
  /** sendData(state) {

    return this.http.post('http://localhost:3000/cliente_cliente', {state: estado).subscribe(
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
 /**  modificar(state) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + state, { estado: state).subscribe(
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
