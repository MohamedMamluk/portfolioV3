import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Models/menu-item';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;
  items: MenuItem[];
  constructor(private menuItems: MenuService) {
    this.isMenuOpen = false;
    this.items = this.menuItems.getMenuItems;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
