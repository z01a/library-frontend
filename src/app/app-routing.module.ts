import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { GuestComponent } from './components/guest/guest.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent as AdminLoginComponent } from './components/admin/login/login.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RegisterComponent } from './components/register/register.component';
import { AdminAuthorizationGuard } from './guards/admin-authorization.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminAuthorizationGuard],
    // children: [
    //   {
    //     path: 'login', component: AdminLoginComponent, canActivateChild: [true]
    //   }
    // ]
  },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthorizationGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'guest', component: GuestComponent },
  { path: '**', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
