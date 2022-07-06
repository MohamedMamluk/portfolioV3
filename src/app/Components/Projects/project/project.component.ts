import { Component, Input, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/Modules/projects-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() projectData: ProjectData = {} as ProjectData;
  constructor() {}

  ngOnInit(): void {}
}
