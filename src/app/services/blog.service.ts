import { Injectable } from '@angular/core';
import {Blog} from '../interface/blog';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogList: Blog[] = [];
  private API_URL = 'http://localhost:8080/blog';


  constructor(private http: HttpClient) { }
  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.API_URL);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.API_URL}/${id}`);
  }

  createBlog(blog: Partial<Blog>): Observable<Blog> {
    return this.http.post<Blog>(this.API_URL, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.API_URL}/${blog.id}`, blog);
  }
}
