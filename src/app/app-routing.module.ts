import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // children: [
    //   { path: '', component: DashboardComponent },
    //   { path: 'booklist', component: DashboardComponent },
    //   { path: 'bookadd', component: DashboardComponent }

    // //  { path: 'view/:id', component: DashboardComponent, canActivate: [AuthGuard] },
    // ]
  },
  { path: 'login', component: LoginComponent },

  { path: 'secret', component: LoginComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
