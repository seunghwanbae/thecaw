import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

/* Modules */
import { AppRouterModule } from './router/app-router.module';

/* Components */
import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    HomeComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
