import { Injectable } from '@angular/core';
import { Regions} from 'src/app/models/administration/regions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  regions: Regions[]=[
    new Regions(1,'Costa Rica', 'Central','San Antonio','Alajuela'),
  ]

  constructor(/* private http: HttpClient */) { }
  /*  getHospitals(): Observable<Hospitals[]> {
      return this.http.get<Hospitals[]>(apiUrl); */
      getRegions(): Regions[]{
        return this.regions
      }

  /*Metodo para mandar info al api*/ 
  /** sendData(country,state, region,province) {

    return this.http.post('http://localhost:3000/cliente_cliente', {pais: country, estado: state, region: region, 
    provincia: province).subscribe(
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
 /**  modificar(id, country,state, region,province) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, { pais: country, estado: state, region: region, 
    provincia: province).subscribe(
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
