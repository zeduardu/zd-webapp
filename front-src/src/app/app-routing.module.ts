import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./layout/public-layout/public-layout.component";
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
