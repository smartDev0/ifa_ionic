import { Component } from '@angular/core';
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
      router: 'home',
    },
    {
      icon: 'people-outline',
      name: 'Groups',
      router: 'groups',
    },
    {
      icon: 'calendar-clear-outline',
      name: 'Events',
      router: 'events',
    },
    {
      icon: 'cart-outline',
      name: 'Store',
      router: 'store',
    },
    {
      icon: 'book-outline',
      name: 'Resource Library',
      router: 'resource-library',
    },

    {
      icon: 'briefcase-outline',
      name: 'Job Listings',
      router: 'job-listing',
    },
    {
      icon: 'bookmark-outline',
      name: 'Businesses',
      router: 'business',
    },
    {
      icon: 'star-outline',
      name: 'Sponsors',
      router: 'sponsor',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Help',
      router: 'help',
    },
    {
      icon: 'power-outline',
      name: 'Log Out',
      router: 'logout',
    },
  ];

  public searchFlag = false;
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open();
  }
  goLink(path) {
    console.log(path);
    this.menuController.close();
  }
  onToggleSearchBar() {
    this.searchFlag = !this.searchFlag
  }
}
