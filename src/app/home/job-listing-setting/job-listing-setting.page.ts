import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-listing-setting',
  templateUrl: './job-listing-setting.page.html',
  styleUrls: ['./job-listing-setting.page.scss'],
})
export class JobListingSettingPage implements OnInit {
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
