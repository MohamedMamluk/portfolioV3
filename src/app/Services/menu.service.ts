import { Injectable } from '@angular/core';
import { MenuItem } from '../Modules/menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: MenuItem[];
  constructor() {
    this.menuItems = [
      {
        name: '_hello',
        path: '/home',
      },
      {
        name: '_about-me',
        path: '/about',
      },
      {
        name: '_projects',
        path: '/projects',
      },
      {
        name: '_contact-me',
        path: '/contact',
      },
    ];
  }

  get getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
