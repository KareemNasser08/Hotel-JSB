import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './Core/Guards/Admin/admin.guard';
import { clientGuard } from './Core/Guards/Client/client.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', canActivate: [adminGuard], loadChildren: () => import('./Features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'landing', canActivate: [clientGuard], loadChildren: () => import('./Features/landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
