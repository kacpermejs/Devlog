import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/contact-page/contact-page.module')
      .then(m => m.ContactPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects-page/projects-page.module')
      .then(m => m.ProjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
