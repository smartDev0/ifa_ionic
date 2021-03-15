import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public groups = [
    {
      id: '1',
      name: 'Welcome Gruop',
      number: '28.00',
      img: './assets/imgs/store-img.png',
    },
    {
      id: '2',
      name: 'Welcome Gruop',
      number: '2.00',
      img: './assets/imgs/store-img.png',
    },
    {
      id: '3',
      name: 'Welcome Gruop',
      number: '280.00',
      img: './assets/imgs/store-img.png',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {
    this.route.navigate(['/home/store-item/1']);
  }
}
