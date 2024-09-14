import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DeleteComponent } from './Components/delete/delete.component';


// angular modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { PrimeIcons } from 'primeng/api';
import { ChartModule } from 'primeng/chart';

// primeng modules

import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastModule } from 'primeng/toast';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedTableComponent } from './Components/shared-table/shared-table.component';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DeleteComponent,
    SharedTableComponent
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
    DropdownModule,
    NgxChartsModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    MatMenuModule,
    TableModule,
    DialogModule,
    MultiSelectModule,
    MenuModule,
    TagModule,
    ChartModule,

  ],
  exports: [
    //Components
    NavbarComponent,
    SidebarComponent,
    DeleteComponent,
    SharedTableComponent,

    FormsModule,
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
    DropdownModule,
    PasswordModule,
    CardModule,
    ButtonModule,
    NgxDropzoneModule,
    ToastModule,
    ChartModule,
    NgxChartsModule,
    MatDialogModule,
    MatDividerModule,
    MatMenuModule,
    SidebarComponent,
    NavbarComponent,
    MultiSelectModule,
    TableModule,
    MenuModule,
    TagModule,
    DialogModule,

  ]
})
export class SharedModule { }
