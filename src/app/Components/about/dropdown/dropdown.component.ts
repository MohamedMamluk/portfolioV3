import { Component, Input, OnInit } from '@angular/core';
import { TapInfo } from 'src/app/Modules/tap-info';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() tapInfo: TapInfo = {} as TapInfo;
  tapOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleTap() {
    this.tapOpen = !this.tapOpen;
  }
}
