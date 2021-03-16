import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-setting',
  templateUrl: './business-setting.page.html',
  styleUrls: ['./business-setting.page.scss'],
})
export class BusinessSettingPage implements OnInit {
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
