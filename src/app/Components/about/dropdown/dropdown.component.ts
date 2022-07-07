import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TapInfo } from 'src/app/Modules/tap-info';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() tapInfo: TapInfo = {} as TapInfo;
  @Output() tapEvent: EventEmitter<string>;
  tapOpen: boolean = true;
  constructor() {
    this.tapEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {}
  toggleTap() {
    this.tapOpen = !this.tapOpen;
  }
  tapChanged(tapName: string) {
    this.tapEvent.emit(tapName);
  }
}
