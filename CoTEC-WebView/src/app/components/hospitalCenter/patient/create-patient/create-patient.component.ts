import { Component, OnInit } from '@angular/core';
import {StatesService} from 'src/app/services/administration/states.service';
import {States} from 'src/app/models/administration/states';
import {PathologiesService} from 'src/app/services/administration/pathologies.service';
import {Pathologies} from 'src/app/models/administration/pathologies';
import {RegionsService} from 'src/app/services/administration/regions.service';
import {Regions} from 'src/app/models/administration/regions';
declare var $: any;

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  regionsList=[]
  pathologiesList=[]
  statesList=[]
  constructor(private statesService: StatesService,private pathologiesService: PathologiesService,private regionsService: RegionsService) { }

  ngOnInit(): void {
    $("#pathologies").mousedown(function(e){
      e.preventDefault();
      
      var select = this;
      var scroll = select.scrollTop;
      
      e.target.selected = !e.target.selected;
      
      setTimeout(function(){select.scrollTop = scroll;}, 0);
      
      $(select).focus();
  }).mousemove(function(e){e.preventDefault()});
  /*   Obtener Informacion del API de estados de pacientes 
    this.statesService.getStates().subscribe((states) =>{
      this.statesList=states;
    }) */
    this.statesList=this.statesService.getStates()

    /*   Obtener Informacion del Api de patologias
    this.pathologiesService.getPathologies().subscribe((pathologies) =>{
      this.pathologiesList=pathologies;
    }) */
    this.pathologiesList=this.pathologiesService.getPathologies()

    /*   Obtener Informacion del Api de regiones
    this.regionsService.getRegions().subscribe((regions) =>{
      this.regionsList=regions;
    }) */
    this.regionsList=this.regionsService.getRegions()

  }

}
