import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EditorModule } from "@tinymce/tinymce-angular";
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    FormsModule
  ]
})
export class AdminModule { }
