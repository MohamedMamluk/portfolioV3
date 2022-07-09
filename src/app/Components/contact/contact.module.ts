import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactWrapperComponent } from './contact-wrapper/contact-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormDataComponent } from './form-data/form-data.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ContactWrapperComponent,
  },
];
@NgModule({
  declarations: [
    ContactWrapperComponent,
    ContactFormComponent,
    FormDataComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class ContactModule {}
