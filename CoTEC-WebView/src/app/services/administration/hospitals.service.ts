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
   /*  getHospitals(): Observable<Hospitals[]> {
      return this.http.get<Hospitals[]>(apiUrl); */
    getHospitals(): Hospitals[]{
      return this.hospitals
    }
    
   
}
