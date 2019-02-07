import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { DrawerService } from './service/drawer.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
// import { ThemeModule } from './@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { SidebarComponent } from './component/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    // ThemeModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
    providers: [AuthGuard, AuthService, DrawerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
