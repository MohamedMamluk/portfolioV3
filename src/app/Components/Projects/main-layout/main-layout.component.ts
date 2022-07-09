import { Component, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/Models/projects-data';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  filter: string = 'all';
  projects: ProjectData[] = [] as ProjectData[];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.projects(this.filter);
  }
}
