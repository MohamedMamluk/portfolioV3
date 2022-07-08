import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactWrapperComponent } from './contact-wrapper/contact-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactWrapperComponent,
  },
];
@NgModule({
  declarations: [ContactWrapperComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class ContactModule {}
