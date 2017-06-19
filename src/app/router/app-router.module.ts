import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Component */
import { HomeComponent } from '../components/home/home.component';
import { WorksComponent } from '../components/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works',  component: WorksComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
