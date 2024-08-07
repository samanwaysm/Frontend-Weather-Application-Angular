import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminAddLocationComponent } from './admin/components/admin-add-location/admin-add-location.component';
import { HomeComponent } from './user/components/home/home.component';


export const routes: Routes = [
    { path:'' , component:HomeComponent },
    { path: 'adminlogin', component:AdminLoginComponent},
    { path: 'adminHome', component:AdminHomeComponent},
    { path: 'adminAddLocation', component:AdminAddLocationComponent},
    // { path: 'adminEditLocation', component:},
];
