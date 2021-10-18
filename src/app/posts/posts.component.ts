import { UserService } from './../users/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts:any = [];
  
  constructor(private route: ActivatedRoute, private service: UserService ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.getAll();
    
  }
  getAll(){
    this.service.getPosts()
    .subscribe(res=>{
      this.posts = res;
    })
  }

}
