import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { BranchComponent } from './branch/branch.component';
import { FoodComponent } from './food/food.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'orders'
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'orders',
      component: OrdersComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'admins',
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'branch',
      component: BranchComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'inventory',
      component: InventoryComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'food',
      component: FoodComponent,
      canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
