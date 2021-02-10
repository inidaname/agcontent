import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BranchComponent } from './branch/branch.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'orders' },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'orders',
      component: OrdersComponent
    },
    {
      path: 'admins',
      component: AdminComponent
    },
    {
      path: 'branch',
      component: BranchComponent
    },
    {
      path: 'inventory',
      component: InventoryComponent
    },
    {
      path: 'food',
      component: FoodComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
