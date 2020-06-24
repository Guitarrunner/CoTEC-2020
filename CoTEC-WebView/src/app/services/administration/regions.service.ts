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
}
