import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog/blog.component';

export const APP_ROUTER: Routes = [
    {
        path: '',
        component: BlogComponent,
        loadChildren: () => import('./components/blog/blog.route')
    },
    {
        path: 'user',
        loadChildren: () => import('./components/user/user.route')
    }
];
