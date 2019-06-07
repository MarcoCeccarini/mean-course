import { Injectable } from '@angular/core';
import { Post } from './posts/post-create/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private posts: Post[]) { }

  getPosts(){
    return [    this.posts];
  }
}
