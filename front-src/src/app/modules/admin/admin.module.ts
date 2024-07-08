import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditorModule } from "@tinymce/tinymce-angular";


@NgModule({
  declarations: [
    NewArticleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule
  ]
})
export class AdminModule { }
