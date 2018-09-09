import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
const appRoutes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
  {
    path: 'home',
    component: PageComponent,
    data: {
      pageName: 'home'}
    },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      pageName: 'about'}
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      pageName: 'contacts'}
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      pageName: 'services'}
  },
  {
    path: 'web',
    component: ServiceComponent,
    data: {
      pageName: 'web'}
  },
  {
    path: 'app',
    component: ServiceComponent,
    data: {
      pageName: 'app'}
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


