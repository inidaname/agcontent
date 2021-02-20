import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'orders'
    },
    {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      canLoad: [AuthGuard]
    },
    { path: '**', component: PathNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
