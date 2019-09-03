import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }


  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPosts() {
    return [...this.posts];
    // return this.posts;
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };

    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
