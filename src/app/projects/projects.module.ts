import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule],
  declarations: [
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    ServicesCardsComponent,
    TwitterFeedComponent,
    HeroSliderComponent,
  ],
})
export class ProjectsModule {}
