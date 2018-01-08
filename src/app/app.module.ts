import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChatbotsComponent } from './chatbots/chatbots.component';
import { FooterComponent } from './core/footer/footer.component';
import { BodyComponent } from './core/body/body.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { MlComponent } from './ml/ml.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

//Modules
import { AppRoutingModule} from './app-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    ChallengesComponent,
    ChatbotsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MlComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    BodyComponent,
    ChallengeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgHttpLoaderModule, Ng2PageScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
