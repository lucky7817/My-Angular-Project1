import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { YourAccountComponent } from "./your-account/your-account.component";
import { AccountComponent } from "./account/account.component";


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
    },
    {
        path: 'auth/profile',
        component: YourAccountComponent,
    },
    {
        path: 'auth/profile/account',
        component: AccountComponent,
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);