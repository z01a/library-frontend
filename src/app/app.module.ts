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
import { ModeratorComponent } from './components/application/modertor/moderator/moderator.component';
import { DashboardComponent as ModeratorDashboardComponent} from './components/application/modertor/dashboard/dashboard.component';
import { HomeComponent } from './components/application/home/home.component';
import { GuestComponent } from './components/application/guest/guest.component';

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
import { UserComponent } from './components/application/user/user/user.component';
import { DashboardComponent } from './components/application/user/dashboard/dashboard.component';

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
    
    ModeratorComponent,
    ModeratorDashboardComponent,
    UserComponent,
    DashboardComponent
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
    MatListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
