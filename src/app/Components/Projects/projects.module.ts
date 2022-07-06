import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { VueComponent } from './vue/vue.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [MainLayoutComponent, VueComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
