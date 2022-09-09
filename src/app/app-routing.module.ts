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

const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  {
    path: '',
    component: ApplicationComponent,
    children: [
      { path: 'guest', component: GuestComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizationGuard] },
      { path: 'home', component: HomeComponent, canActivate: [AuthorizationGuard] }
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
