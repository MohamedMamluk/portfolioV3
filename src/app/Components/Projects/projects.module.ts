import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [MainLayoutComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
