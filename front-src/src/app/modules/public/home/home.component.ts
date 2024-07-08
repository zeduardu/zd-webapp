import {Component, OnInit} from '@angular/core';
import {Post} from "../../../data/schema/post";
import {PostService} from "../../../data/services/post.service";
import { Observable } from 'rxjs';
import { Category } from 'src/app/data/schema/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  postObservable$: Observable<Post[]> | undefined;
  categories: string[] = [
    "Technology",
    "Health",
    "Science",
    "Business",
    "Sports",
    "Fashion",
    "Food",
    "Travel",
    "Art",
    "Music"
  ];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postObservable$ = this.postService.getPosts();
  }

  formatDateTime(date: Date): string {
    let dateString: string = new Date(date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
    return dateString;
  }

  getCategoriesInString(categories: Category[]): string {
    return categories.map(category => category.name).join(" | ");
  }
}
