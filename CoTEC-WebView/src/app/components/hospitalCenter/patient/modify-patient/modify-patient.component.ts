import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {

  regionsList=[]
  pathologiesList=[]
  statesList=[]
  constructor() { }

  ngOnInit(): void {
    $("#modifyPatientPathologies").mousedown(function(e){
      e.preventDefault();
      
      var select = this;
      var scroll = select.scrollTop;
      
      e.target.selected = !e.target.selected;
      
      setTimeout(function(){select.scrollTop = scroll;}, 0);
      
      $(select).focus();
  }).mousemove(function(e){e.preventDefault()});

  }

}
