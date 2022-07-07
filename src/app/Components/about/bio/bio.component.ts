import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutMeService } from 'src/app/Services/about-me.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent implements OnInit {
  bio: string[];
  constructor(private aboutmeData: AboutMeService) {
    this.bio = this.aboutmeData.bio;
  }

  ngOnInit(): void {}
}
