export class Patients {
    id:number;
    name:string;
    lastName:string;
    patientId:number;
    age:number;
    nationality:string;
    region:string;
    pathologies:string;
    states:string;
    medication:string;
    intern:string;
    uci:string;

    constructor(id,name,lastName,patientId,age,nationality,region,pathologies,states,medication,intern,uci){
            this.id=id;
            this.name=name;
            this.lastName=lastName;
            this.patientId=patientId;
            this.age=age;
            this.nationality=nationality;
            this.region=region;
            this.pathologies=pathologies;
            this.states=states;
            this.medication=medication;
            this.intern=intern;
            this.uci=uci;
            
        }


}
