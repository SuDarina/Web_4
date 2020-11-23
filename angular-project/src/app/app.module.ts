import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: '', component: AuthorizationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
