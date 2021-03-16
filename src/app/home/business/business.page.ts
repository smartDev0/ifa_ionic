import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  public cards = [
    {
      id: '1',
      name: 'Willach Pharmacy Solutions',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
    },
    {
      id: '2',
      name: 'MSC Signs',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
    },
    {
      id: '3',
      name: 'MSC Signs',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {
    this.route.navigate(['/home/business-item/1']);
  }
}
