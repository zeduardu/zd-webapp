import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements AfterViewInit {
  @ViewChild('editor0a1b') editor0a1b!: ElementRef;
  content: string = '';

  ngAfterViewInit(): void {
    this.editor0a1b.nativeElement.value = 'Article!';
  }
}
