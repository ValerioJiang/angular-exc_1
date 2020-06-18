import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  event = 'Event:ngConf 2025'
  today : number = Date.now()
  now = Date.now()
  address = 'Address:123 Main St, Salt Lake City, UT, USA'
  constructor() { }

  ngOnInit() {
  }

}