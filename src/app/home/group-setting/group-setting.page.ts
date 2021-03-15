import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-setting',
  templateUrl: './group-setting.page.html',
  styleUrls: ['./group-setting.page.scss'],
})
export class GroupSettingPage implements OnInit {
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
