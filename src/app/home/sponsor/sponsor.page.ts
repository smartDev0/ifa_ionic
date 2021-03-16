import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.page.html',
  styleUrls: ['./sponsor.page.scss'],
})
export class SponsorPage implements OnInit {
  public cards = [
    {
      id: '1',
      name: 'Laminex',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
      sponsor: 'Interior Fitout Awards Sponsor',
    },
    {
      id: '2',
      name: 'MSC Signs',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
      sponsor: 'Principal Partner',
    },
    {
      id: '3',
      name: 'MSC Signs',
      number: '28',
      img: './assets/imgs/business.png',
      card_img: './assets/imgs/business-card.png',
      sponsor: 'Platinum Partner',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {}
}
