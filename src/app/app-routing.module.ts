import { NgModule } from '@angular/core';
import {MlComponent} from './ml/ml.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {ChallengesComponent} from './challenges/challenges.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ChatbotsComponent} from './chatbots/chatbots.component';
import {AdminComponent} from './admin/admin.component';
import {PageNotFoundComponent} from './core/page-not-found.component';

const indexRoute: Route = {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
};

const fallbackRoute: Route = {
  path: '**',
  component: HomeComponent
};

const mainRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  },
  {
    path: 'chatbots',
    component: ChatbotsComponent
  },
  {
    path: 'ml',
    component: MlComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '***',
    component: PageNotFoundComponent
  },
  indexRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
