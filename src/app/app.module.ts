import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './component/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './component/banner/banner.component';
import { ShowItemComponent } from './component/show-item/show-item.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { VideoEmbedComponent } from './component/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { GenresComponent } from './pages/genres/genres.component';



const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:type', component: ShowsListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowItemComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,ShowsListComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
    GenresComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    TagModule,
    ImageModule,
    GalleriaModule,PaginatorModule,
    CarouselModule,InputTextModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
