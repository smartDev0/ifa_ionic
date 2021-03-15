import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  public groups = [
    {
      id: '1',
      name: 'Welcome Gruop',
      number: '28',
      img: './assets/imgs/card-img.png',
    },
    {
      id: '2',
      name: 'Welcome Gruop',
      number: '28',
      img: './assets/imgs/card-img.png',
    },
    {
      id: '3',
      name: 'Welcome Gruop',
      number: '28',
      img: './assets/imgs/card-img.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
