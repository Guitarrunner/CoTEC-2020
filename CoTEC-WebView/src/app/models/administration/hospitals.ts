export class Hospitals {
    id: number;
    name: string;
    location: string;
    bedQuantity: number;
    uciQuantity: number;
    director: string;
    contact: number;

    constructor(id, name, location, bedQuantity, uciQuantity, director, contact){
        this.id=id;
        this.name=name;
        this.location=location;
        this.bedQuantity=bedQuantity;
        this.uciQuantity=uciQuantity;
        this.director=director;
        this.contact=contact;
    }
}
