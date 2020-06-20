import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {
  contacts:[]
  constructor() { }

  ngOnInit(): void {
  }

}
