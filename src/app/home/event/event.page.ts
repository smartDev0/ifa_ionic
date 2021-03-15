import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  public groups = [
    {
      id: '1',
      name: 'NSW Division Annual Golf Day Event',
      number: '28',
      img: './assets/imgs/event-img.png',
      date: '23rd July 2021',
    },
    {
      id: '2',
      name: 'NSW Division Annual Golf Day Event',
      number: '28',
      img: './assets/imgs/event-img.png',
      date: '23rd July 2021',
    },
    {
      id: '3',
      name: 'Welcome Gruop',
      number: '28',
      img: './assets/imgs/event-img.png',
      date: '23rd July 2021',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {
    this.route.navigate(['/home/event-item/1']);
  }
}
