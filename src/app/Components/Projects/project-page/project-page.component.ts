import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectData } from 'src/app/Models/projects-data';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  project?: ProjectData;
  constructor(
    private activated: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      (value) =>
        (this.project = this.projectsService.getProject(
          Number(value.get('id'))
        ))
    );
  }
}
