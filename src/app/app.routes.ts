import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent
}, {
    path: 'about-me',
    loadComponent: () => import('./routes/about-me/about-me.component').then(m => m.AboutMeComponent)
}, {
    path: 'contact-me',
    loadComponent: () => import('./routes/contact-me/contact-me.component').then(m => m.ContactMeComponent)
}, {
    path: 'projects',
    loadComponent: () => import('./routes/projects/projects.component').then(m => m.ProjectsComponent)
}, {
    path: '**',
    component: HomeComponent
}];
