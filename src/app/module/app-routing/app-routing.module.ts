import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../../components/blogs/list/list.component';
import {CreateComponent} from '../../components/blogs/create/create.component';
import {DetailComponent} from '../../components/blogs/detail/detail.component';
import {DeleteComponent} from '../../components/blogs/delete/delete.component';
import {UpdateComponent} from '../../components/blogs/update/update.component';

const routes: Routes = [
  {path: 'blog', component: ListComponent},
  {path: 'blog/create', component: CreateComponent},
  {path: 'blog/:id', component: DetailComponent},
  {path: 'blog/:id/delete', component: DeleteComponent},
  {path: 'blog/:id/update', component: UpdateComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
