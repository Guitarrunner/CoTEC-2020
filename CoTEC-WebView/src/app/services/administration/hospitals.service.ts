import { Injectable } from '@angular/core';
import { Hospitals} from 'src/app/models/administration/hospitals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */


@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
 
  hospitals: Hospitals[]= [
    new Hospitals(1,'Mexico','San Jose',200,30,'Juanito Perez',24459875),
  ]

  constructor(/* private http: HttpClient */) {}  
  /* Metodo para meter info a las tablas*/
  /*  getHospitals(): Observable<Hospitals[]> {
      return this.http.get<Hospitals[]>(apiUrl); */
  getHospitals(): Hospitals[]{
      return this.hospitals
    }
   




  /*Metodo para mandar info al api*/ 
  /** sendData( name, location, bedQuantity, uciQuantity, director, contact) {

    return this.http.post('http://localhost:3000/cliente_cliente', { nombre: name, ubicacion: location, cantidadUci: bedQuatity, 
    director: director, contacto: contact).subscribe(
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
 /**  modificar(id, name, location, bedQuantity, uciQuantity, director, contact) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, {nombre: name, ubicacion: location, cantidadUci: bedQuatity, 
    director: director, contacto: contact).subscribe(
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
