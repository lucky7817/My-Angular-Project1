import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: const [AuthActivate],
        data: {
            title: 'Login',
            loginRequired: false,
        }
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Register',
            loginRequired: false,
        }
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Login',
            loginRequired: true,
        }
    },
    // {
    //     path: 'auth/profile',
    //     component: ProfileComponent,
    //     canActivate: [AuthActivate],
    //     data: {
    //         title: 'Login',
    //         loginRequired: true,
    //     }
    // },
];

export const AuthRoutingModule = RouterModule.forChild(routes);