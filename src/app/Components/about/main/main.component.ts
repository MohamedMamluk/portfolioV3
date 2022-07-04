import { Component, OnInit } from '@angular/core';
import { TapInfo } from 'src/app/Modules/tap-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  taps: TapInfo[];
  constructor() {
    this.taps = [
      {
        tapName: 'personal-info',
        tapDropdownItems: [
          {
            tapName: 'bio',
            tapIcon: 'folder',
            tapIconColor: 'mainPink',
          },
          {
            tapName: 'interests',
            tapIcon: 'folder',
            tapIconColor: 'mainGreen',
          },
          {
            tapName: 'education',
            tapIcon: 'folder',
            tapIconColor: 'mainBlue',
          },
        ],
        as: 'personal',
      },
    ];
  }

  ngOnInit(): void {}
}
