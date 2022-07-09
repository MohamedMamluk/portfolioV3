import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() message: string = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {}
}
