import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineComponent } from './wine/wine.component';
import { RedwineComponent } from './redwine/redwine.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wine',
    pathMatch: 'full'
  },
  {
    path: 'wine',
    component: WineComponent
  }, {
    path: 'redwine',
    component: RedwineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
