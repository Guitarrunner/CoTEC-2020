import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modify-contacts',
  templateUrl: './modify-contacts.component.html',
  styleUrls: ['./modify-contacts.component.css']
})
export class ModifyContactsComponent implements OnInit {
  pathologiesList=[]

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
