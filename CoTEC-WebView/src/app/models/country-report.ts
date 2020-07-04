export class CountryReport {
  contagiados : number;
  recuperados : number;
  muertos : number;
  activos : number;
  incDiario: number;
  medidas : string[];
  country: string;

  constructor(contagiados, recuperados, muertos, activos, incDiario, medidas,country){
    this.contagiados=contagiados;
    this.recuperados=recuperados;
    this.muertos=muertos;
    this.activos=activos;
    this.incDiario=incDiario;
    this.medidas=medidas;
    this.country=country;
  }


}
