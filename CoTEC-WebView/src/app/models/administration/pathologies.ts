export class Pathologies {
    id: number;
    name:string;
    description:string;
    symptoms: string;
    treatment:string;

    constructor(id, name, description,symptoms, treatment){
        this.id=id;
        this.name=name;
        this.description=description;
        this.symptoms=symptoms;
        this.treatment=treatment;
    }
}
