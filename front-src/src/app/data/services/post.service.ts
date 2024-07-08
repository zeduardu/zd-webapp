import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../schema/post";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  configUrl: string = 'assets/db/mockturtle.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.configUrl);
  }
}
