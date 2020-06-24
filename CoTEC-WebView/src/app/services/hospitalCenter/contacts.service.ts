import { Injectable } from '@angular/core';
import {Contacts} from 'src/app/models/hospitalCenter/contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contacts[]=[
    new Contacts(1,'Alejandra','Cruz', 174652896,25,'gutemalteca','50 sur de la iglesia de pochito','lupus','ale@gmail.com'),
  ]

  constructor(/* private http: HttpClient */) { }
   /*  getContacts(): Observable<Contacts[]> {
      return this.http.get<Contacts[]>(apiUrl); */
      getContacts(): Contacts[]{
        return this.contacts
      }
}
