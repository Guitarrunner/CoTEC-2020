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

      /*Metodo para mandar info al api*/ 
  /** sendData( name,lasName,contactId,age,nationality,address,pathologies,email) {

    return this.http.post('http://localhost:3000/cliente_cliente', { nombre: name, apellido: lastName, cedula: contactId, 
    edad: age, nacionalidad: nationality, direccion: address, patologias: pathologies, correo: email).subscribe(
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
 /**  modificar(id, name,lasName,contactId,age,nationality,address,pathologies,email) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, {nombre: name, apellido: lastName, cedula: contactoId, 
    edad: age, nacionalidad: nationality, direccion: address, patologias: pathologies, correo: email).subscribe(
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
