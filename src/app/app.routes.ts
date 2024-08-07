import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminAddLocationComponent } from './admin/components/admin-add-location/admin-add-location.component';
import { UserDashboardComponent } from './user/components/user-dashboard/user-dashboard.component';
import { authGuardGuard } from './admin/guards/auth-guard.guard'
import { isAuthGuardGuard } from './admin/guards/is-auth-guard.guard';

export const routes: Routes = [
    { path:'' , component:UserDashboardComponent },
    { path: 'adminlogin', component:AdminLoginComponent,canActivate : [isAuthGuardGuard]},
    { path: 'adminHome', component:AdminHomeComponent,canActivate :[authGuardGuard]},
    { path: 'adminAddLocation', component:AdminAddLocationComponent, canActivate:[authGuardGuard]},
];
