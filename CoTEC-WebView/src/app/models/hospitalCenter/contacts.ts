import { parseHTML } from 'jquery';

export class Contacts {
    id:number;
    name:string;
    lastName:string;
    contactId:number;
    age:number;
    nationality:string;
    address:string;
    pathologies:string;
    email:string;

    constructor(id,name,lasName,contactId,age,nationality,address,pathologies,email){
        this.id=id;
        this.name=name;
        this.lastName=lasName;
        this.contactId=contactId;
        this.age=age;
        this.nationality=nationality;
        this.address=address;
        this.pathologies=pathologies;
        this.email=email;
    }

}
