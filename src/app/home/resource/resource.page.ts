import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {
  public resources = [
    {
      id: '1',
      name: 'Feature: Finance (April 2020)',
      img: 'assets/imgs/icons/pdf.png',
    },
    {
      id: '2',
      name: 'Feature: Finance (April 2020)',
      img: 'assets/imgs/icons/pdf.png',
    },
    {
      id: '3',
      name: 'Feature: Finance (April 2020)',
      img: 'assets/imgs/icons/pdf.png',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit() {}

  goItem() {
    this.route.navigate(['/home/resource-item/1']);
  }
}
