import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/empty/default/default.component';
import { LoginComponent } from './components/empty/login/login.component';
import { GuestComponent } from './components/application/guest/guest.component';
import { HomeComponent } from './components/application/home/home.component';
import { AdminComponent } from './components/application/admin/admin.component';
import { LoginComponent as AdminLoginComponent } from './components/empty/admin/login/login.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RegisterComponent } from './components/empty/register/register.component';
import { AdminAuthorizationGuard } from './guards/admin-authorization.guard';
import { ApplicationComponent } from './components/application/application.component';
import { EmptyComponent } from './components/empty/empty.component';
import { RequestsComponent as AdminRequestsComponent } from './components/application/admin/requests/requests.component';
import { DashboardComponent as AdminDashboardComponent } from './components/application/admin/dashboard/dashboard.component';
import { ModeratorComponent } from './components/application/modertor/moderator/moderator.component';
import { DashboardComponent as ModeratorDashboardComponent } from './components/application/modertor/dashboard/dashboard.component';
import { DashboardComponent as UserDashboardComponent } from './components/application/user/dashboard/dashboard.component';
import { UserComponent } from './components/application/user/user/user.component';
import { DashboardComponent as GuestDashboardComponent } from './components/application/guest/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  {
    path: '',
    component: ApplicationComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthorizationGuard] },
      {
        path: 'guest',
        component: GuestComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: GuestDashboardComponent },
        ]
      },
      { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminAuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'requests', component: AdminRequestsComponent }
        ]
      },
      {
        path: 'moderator',
        component: ModeratorComponent,
        canActivate: [AuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: ModeratorDashboardComponent },
        ]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: UserDashboardComponent },
        ]
      },
    ]
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard] },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: '**', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
