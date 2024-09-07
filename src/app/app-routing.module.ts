import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, { path: 'Auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) }, { path: 'Dashboard', loadChildren: () => import('./Features/dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'Landing', loadChildren: () => import('./Features/landing/landing.module').then(m => m.LandingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
