import {Component, Input, OnInit} from '@angular/core';
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-next-previous-scroll-bar',
  templateUrl: './next-previous-scroll-bar.component.html',
  styleUrls: ['./next-previous-scroll-bar.component.css']
})
export class NextPreviousScrollBarComponent implements OnInit{
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() {}

  ngOnInit() {}

  @Input() scrollUnit: number = 150;
}
