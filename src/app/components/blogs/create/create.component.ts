import { Component, OnInit } from '@angular/core';
import {Blog} from '../../../interface/blog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BlogService} from '../../../services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  blog: Blog;
  blogCreateForm: FormGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl()
  });
  constructor(private blogService: BlogService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  createBlog() {
    const {value} = this.blogCreateForm;
    this.blogService.createBlog(value).subscribe(
      next => {this.blogService.blogList.push(next);
    });
  }
}
