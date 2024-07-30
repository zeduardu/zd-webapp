import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewArticleComponent} from "./new-article/new-article.component";

const routes: Routes = [
  {
    path: 'write',
    component: NewArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
