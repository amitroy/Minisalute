import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { MinisalbuttonsComponent } from './minisalbuttons/minisalbuttons.component';
import { CreatorComponent } from './creator/creator.component';
import { VideoComponent } from './video/video.component';
import { PreviewComponent } from './preview/preview.component';

const appRoutes: Routes = [
  {
    path: '',
    component: VideoComponent
  },
  {
    path: 'h/:minisalkey',
    component: VideoComponent
  },
  {
    path: 'c',
    component: CreatorComponent
  },
  {
    path: 'p/:minisalkey',
    component: PreviewComponent
  },
  // Handle 404s
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    MinisalbuttonsComponent,
    CreatorComponent,
    VideoComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
