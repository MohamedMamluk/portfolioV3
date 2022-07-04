import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

import { BioComponent } from './bio/bio.component';
import { InterestsComponent } from './interests/interests.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'personal/bio',
        component: BioComponent,
      },
      {
        path: 'personal/interests',
        component: InterestsComponent,
      },
      {
        path: 'personal/education',
        component: EducationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
