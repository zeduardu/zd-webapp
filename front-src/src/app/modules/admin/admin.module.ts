import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewArticleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    FormsModule
  ]
})
export class AdminModule { }
