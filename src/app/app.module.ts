import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { ApplicationComponent } from './components/application/application.component';
import { AdminComponent } from './components/application/admin/admin.component';
import { RequestsComponent as AdminRequestsComponent} from './components/application/admin/requests/requests.component';
import { DashboardComponent as AdminDashboardComponent } from './components/application/admin/dashboard/dashboard.component';
import { UsersComponent  as AdminUsersComponent } from './components/application/admin/users/users.component';
import { UserDetailsComponent as AdminUserDetailsComponent } from './components/application/admin/user-details/user-details.component';
import { BooksComponent as AdminBooksComponent } from './components/application/admin/books/books.component';
import { BookDetailsComponent as AdminBookDetailsComponent } from './components/application/admin/books/details/details.component';
import { ModeratorComponent } from './components/application/moderator/moderator.component';
import { DashboardComponent as ModeratorDashboardComponent} from './components/application/moderator/dashboard/dashboard.component';
import { UserComponent } from './components/application/user/user.component';
import { DashboardComponent as UserDashboardComponent} from './components/application/user/dashboard/dashboard.component';
import { HomeComponent } from './components/application/home/home.component';
import { GuestComponent } from './components/application/guest/guest.component';
import { UserRegisterComponent as AdminUserRegisterComponent } from './components/application/admin/users/register/register.component';
import { BookRegisterComponent as AdminBookRegisterComponent } from './components/application/admin/books/register/register.component';


import { EmptyComponent } from './components/empty/empty.component';
import { LoginComponent as AdminLoginComponent} from './components/empty/admin/login/login.component';
import { LoginComponent } from './components/empty/login/login.component';
import { RegisterComponent } from './components/empty/register/register.component';

import { DefaultComponent } from './components/empty/default/default.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { UserProfileComponent } from './components/application/user/profile/profile.component';
import { UserBooksComponent } from './components/application/user/books/books.component';
import { ModeratorProfileComponent } from './components/application/moderator/profile/profile.component';
import { ModeratorBooksComponent } from './components/application/moderator/books/books.component';
import { BookDetailsComponent as ModeratorBooksDetailsComponent } from './components/application/moderator/books/details/details.component';
import { BookRegisterComponent as ModeratorBookRegisterComponent } from './components/application/moderator/books/register/register.component';
import { UserReadingComponent } from './components/application/user/reading/reading.component';
import { UserHistoryComponent } from './components/application/user/history/history.component';
import { BookDetailsComponent as UserBookDetailsComponent } from './components/application/user/details/details.component';
import { RecommendedComponent } from './components/application/user/dashboard/recommended/recommended.component';
import { CounterComponent } from './components/application/admin/dashboard/counter/counter.component';
import { GuestBooksComponent } from './components/application/guest/books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    HomeComponent,
    GuestComponent,
    AdminComponent,
    RegisterComponent,
    AdminLoginComponent,
    ApplicationComponent,
    EmptyComponent,

    AdminRequestsComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminUserDetailsComponent,
    AdminBooksComponent,
    AdminBookDetailsComponent,
    AdminUserRegisterComponent,
    AdminBookRegisterComponent,
    
    ModeratorComponent,
    ModeratorDashboardComponent,
    ModeratorProfileComponent,
    ModeratorBooksComponent,
    ModeratorBooksDetailsComponent,
    ModeratorBookRegisterComponent,


    UserComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserBooksComponent,
    UserProfileComponent,
    UserBooksComponent,
    UserReadingComponent,
    UserHistoryComponent,
    UserBookDetailsComponent,
    RecommendedComponent,
    CounterComponent,
    GuestBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
