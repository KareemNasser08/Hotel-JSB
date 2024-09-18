import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './ad-details.component';

const routes: Routes = [{ path: '', component: AdDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdDetailsRoutingModule { }
