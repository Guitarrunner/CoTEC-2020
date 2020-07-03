import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  countries = ["Alemania","Italia","Costa Rica"];
  medidas=["medida1", "medida2","medida1", "medida2","medida1", "medida2"];

  associateCountry(){

  }

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $("#summit1").click(function() {
        var country=$("#d1").val();
        var date=$("#datepicker").val();
        var rest = [];
            var m1=$("#d5").val();
            rest.push((m1));

        console.log(country, date,rest);
      });
    });


  }

}

