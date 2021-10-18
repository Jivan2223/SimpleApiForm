import { UsersComponent } from './users.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
    // { path: '', redirectTo:'users'},
    // { path: 'users', component:UsersComponent},
    // { path: 'posts', component:PostsComponent},
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsersRoutingModule {
  }