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
import { ModeratorComponent } from './components/application/moderator/moderator.component';
import { DashboardComponent as ModeratorDashboardComponent } from './components/application/moderator/dashboard/dashboard.component';
import { DashboardComponent as UserDashboardComponent } from './components/application/user/dashboard/dashboard.component';
import { UserComponent } from './components/application/user/user.component';
import { DashboardComponent as GuestDashboardComponent } from './components/application/guest/dashboard/dashboard.component';
import { UsersComponent as AdminUsersComponent } from './components/application/admin/users/users.component';
import { UserDetailsComponent as AdminUserDetailsComponent } from './components/application/admin/user-details/user-details.component';
import { BooksComponent as AdminBooksComponent } from './components/application/admin/books/books.component';
import { BookDetailsComponent as AdminBookDetailsComponent } from './components/application/admin/books/details/details.component';
import { UserRegisterComponent as AdminUserRegisterComponent } from './components/application/admin/users/register/register.component';
import { BookRegisterComponent as AdminBookRegisterComponent } from './components/application/admin/books/register/register.component';
import { ModeratorProfileComponent } from './components/application/moderator/profile/profile.component';
import { UserProfileComponent } from './components/application/user/profile/profile.component';
import { ModeratorBooksComponent } from './components/application/moderator/books/books.component';
import { UserBooksComponent } from './components/application/user/books/books.component';
import { BookDetailsComponent as ModeratorBooksDetailsComponent } from './components/application/moderator/books/details/details.component';
import { BookRegisterComponent as ModeratorBookRegisterComponent } from './components/application/moderator/books/register/register.component';
import { UserReadingComponent } from './components/application/user/reading/reading.component';
import { UserHistoryComponent } from './components/application/user/history/history.component';
import { BookDetailsComponent as UserBookDetailsComponent } from './components/application/user/details/details.component';
import { GuestBooksComponent } from './components/application/guest/books/books.component';
import { UserPasswordComponent } from './components/application/user/password/password.component';

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
          { path: 'books', component: GuestBooksComponent },
        ]
      },
      { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminAuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'requests', component: AdminRequestsComponent },
          { path: 'users', component: AdminUsersComponent },
          { path: 'users/register', component: AdminUserRegisterComponent },
          { path: 'users/:id', component: AdminUserDetailsComponent },
          { path: 'books/register', component: AdminBookRegisterComponent },
          { path: 'books', component: AdminBooksComponent },
          { path: 'books/:isbn', component: AdminBookDetailsComponent }
        ]
      },
      {
        path: 'moderator',
        component: ModeratorComponent,
        canActivate: [AuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: ModeratorDashboardComponent },
          { path: 'profile', component: ModeratorProfileComponent },
          { path: 'books/register', component: ModeratorBookRegisterComponent },
          { path: 'books', component: ModeratorBooksComponent },
          { path: 'books/:isbn', component: ModeratorBooksDetailsComponent },
        ]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthorizationGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: UserDashboardComponent },
          { path: 'profile', component: UserProfileComponent },
          { path: 'books', component: UserBooksComponent },
          { path: 'books/:isbn', component: UserBookDetailsComponent },
          { path: 'reading', component: UserReadingComponent },
          { path: 'history', component: UserHistoryComponent },
          { path: 'password', component: UserPasswordComponent },
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
