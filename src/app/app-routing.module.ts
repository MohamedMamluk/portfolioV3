import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProjectPageComponent } from './Components/Projects/project-page/project-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'about',
    loadChildren: () =>
      import('src/app/Components/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('src/app/Components/Projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'projects/:id',
    component: ProjectPageComponent,
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('src/app/Components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
