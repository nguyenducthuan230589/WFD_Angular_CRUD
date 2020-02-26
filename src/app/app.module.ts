import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/blogs/create/create.component';
import { DeleteComponent } from './components/blogs/delete/delete.component';
import { UpdateComponent } from './components/blogs/update/update.component';
import { ListComponent } from './components/blogs/list/list.component';
import { DetailComponent } from './components/blogs/detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './module/app-routing/app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
