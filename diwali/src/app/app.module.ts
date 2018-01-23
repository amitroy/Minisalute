import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirebgComponent } from './firebg/firebg.component';
import { CreatorComponent } from './creator/creator.component';
import { LandhomeComponent } from './landhome/landhome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FirebgComponent
  },
  {
    path: 'h/:minisalkey',
    component: FirebgComponent
  },
  {
    path: 'c',
    component: CreatorComponent
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
    FirebgComponent,
    CreatorComponent,
    LandhomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
