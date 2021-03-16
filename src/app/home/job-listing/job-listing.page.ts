import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.page.html',
  styleUrls: ['./job-listing.page.scss'],
})
export class JobListingPage implements OnInit {
  public cards = [
    {
      id: '1',
      name: 'Junior/ Entry Level Estimator (Cabinet Making)',
      img: 'assets/imgs/job-item.png',
      position: 'Full-Time Position',
      location: 'Dandenong, VIC',
    },
    {
      id: '2',
      name: 'Estimator',
      img: 'assets/imgs/job-item.png',
      position: 'Full-Time Position',
      location: 'Dandenong, VIC',
    },
    {
      id: '3',
      name: 'Cabinet Maker',
      img: 'assets/imgs/job-item.png',
      position: 'Part-Time Position',
      location: 'Beverley, South Australia.',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {
    this.route.navigate(['/home/job-listing-item/1']);
  }
}
