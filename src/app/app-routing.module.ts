import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { path: '**', component: PathNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
