import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BioComponent } from './bio/bio.component';
import { AboutRoutingModule } from './about-routing.module';
import { InterestsComponent } from './interests/interests.component';
import { EducationComponent } from './education/education.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainComponent,
    DropdownComponent,
    BioComponent,
    InterestsComponent,
    EducationComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, MatIconModule],
  exports: [],
})
export class AboutModule {}
