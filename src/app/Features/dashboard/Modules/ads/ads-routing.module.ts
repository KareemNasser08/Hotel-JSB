import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads.component';
import { AddEditAdComponent } from './Components/add-edit-ad/add-edit-ad.component';

const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'add-edit-ad', component: AddEditAdComponent },
  { path: 'edit/:id', component: AddEditAdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
