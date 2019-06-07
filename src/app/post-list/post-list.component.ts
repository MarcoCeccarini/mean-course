import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { Post } from '../posts/post-create/post';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {

   posts = [{title: 'p1', content: 'post1'},
   {title: 'p2', content: 'post2'},
   {title: 'p3', content: 'post3'}];

   constructor(private service: MessageService, private editSrv: EditService){
    service.getMessage().subscribe(message => {
      this.posts.push(message)
    });
  }
  ngOnInit() {
  }

  remove(idx : number){
    this.posts.splice(idx,1);
  }

  edit(idx: number){
    this.editSrv.sendMessage(this.posts[idx]);
  }
}
