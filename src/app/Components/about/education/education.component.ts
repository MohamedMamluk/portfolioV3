import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Models/about-me';
import { AboutMeService } from 'src/app/Services/about-me.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  constructor(private aboutMeService: AboutMeService) {
    this.education = this.aboutMeService.education;
  }

  ngOnInit(): void {}
}
