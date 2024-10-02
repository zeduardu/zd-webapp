import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  standalone: true,
  imports: [FormsModule, EditorModule],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class NewArticleComponent {
  @ViewChild('editor0a1b') editor0a1b!: ElementRef;
  content: string = '';
  init: EditorComponent['init'] = {
    menubar: false,
    plugins:
      'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
    toolbar:
      'save | undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | anchor codesample',
    file_picker_callback: (callback, value, meta) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
    },
  };
  // init: EditorComponent['init'] = {
  //   plugins:
  //     'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
  //   toolbar:
  //     'undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl',
  //   image_files_types: 'jpg,png',
  //   file_picker_types: 'image',
  //   file_picker_callback: (callback: any, value: any, meta: any) => {
  //     const input = document.createElement('input');
  //     input.setAttribute('type', 'file');
  //     input.setAttribute('accept', 'image/*');

  //     input.onchange = (event: any) => {
  //       const file = event.target.files[0];
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         const id = 'blobid' + new Date().getTime();
  //         console.log(file);
  //         console.log(e);
  //           const blobCache = tinymce.activeEditor?.editorUpload.blobCache;
  //           const base64 = reader.result?.toString().split(',')[1];
  //           const blobInfo = blobCache?.create(id, file, base64 || '');
  //           if (blobInfo) {
  //             blobCache?.add(blobInfo);
  //           };
  //           //callback(blobInfo?.blobUri(), { title: file.name });
  //       };
  //     //   reader.readAsDataURL(file);
  //     };
  //     input.click();
  //   },
  // };
}
