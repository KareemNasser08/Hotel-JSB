import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DividerModule } from 'primeng/divider';


import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    InputTextModule,
    NgxDropzoneModule,
    CheckboxModule,
    RadioButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    DividerModule,
    CardModule,
    PasswordModule,
    ButtonModule,


  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    DividerModule,

    PasswordModule,
    CardModule,
    ButtonModule,
    NgxDropzoneModule,
    ToastModule,
  ]
})
export class SharedModule { }
