import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-setting',
  templateUrl: './event-setting.page.html',
  styleUrls: ['./event-setting.page.scss'],
})
export class EventSettingPage implements OnInit {
  public items = [
    {
      name: 'Patrick Lee',
      role: 'Velit suspendisse ',
      img: 'assets/imgs/avatar.png',
    },
    {
      name: 'PAssociation Annie',
      role: 'Velit suspendisse ',
      img: 'assets/imgs/avatar.png',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
