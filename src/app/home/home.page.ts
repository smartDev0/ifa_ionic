import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public menuList = [
    {
      icon: 'home-outline',
      name: 'Home',
      router: 'home/member',
    },
    {
      icon: 'people-outline',
      name: 'Groups',
      router: 'home/group',
    },
    {
      icon: 'calendar-clear-outline',
      name: 'Events',
      router: 'home/event',
    },
    {
      icon: 'cart-outline',
      name: 'Store',
      router: 'home/store',
    },
    {
      icon: 'book-outline',
      name: 'Resource Library',
      router: 'home/resource',
    },

    {
      icon: 'briefcase-outline',
      name: 'Job Listings',
      router: 'home/job-listing',
    },
    {
      icon: 'bookmark-outline',
      name: 'Businesses',
      router: 'home/business',
    },
    {
      icon: 'star-outline',
      name: 'Sponsors',
      router: 'home/sponsor',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Help',
      router: 'home/help',
    },
    {
      icon: 'power-outline',
      name: 'Log Out',
      router: 'login',
    },
  ];

  public searchFlag = false;
  constructor(private menuController: MenuController, private route: Router) {}

  openMenu() {
    this.menuController.open();
  }
  goLink(path) {
    console.log(path);
    this.menuController.close();
    this.route.navigate([path]);
  }
  onToggleSearchBar() {
    this.searchFlag = !this.searchFlag;
  }
}
