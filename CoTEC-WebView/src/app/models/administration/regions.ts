export class Regions {
    id: number;
    country: string;
    state: string;
    region: string;
    province: string;

    constructor(id, country,state, region,province){
        this.id=id;
        this.country=country;
        this.state=state;
        this.region=region;
        this.province=province;
    }
}
