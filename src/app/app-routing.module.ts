import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginFormComponent },
  { path: 'users', component: UsersComponent,
    children: [
      // { path: '', redirectTo: 'users' },
      // { path: 'users', component: UsersComponent },
      // { path: 'post', component: PostsComponent },
    ]

  },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
