import {Component, OnInit} from '@angular/core';
import {Blog} from '../../../interface/blog';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogService} from '../../../services/blog.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  blog: Blog;
  sub: Subscription;
  blogUpdateForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogUpdateForm = this.formBuilder.group({
      title: [''],
      content: ['']
    });
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.blogService.getBlogById(Number(id)).subscribe(next => {
        this.blog = next;
        this.blogUpdateForm.patchValue(next);
      });
    });
  }

  updateBlog() {
    const {value} = this.blogUpdateForm;
    const data = {
      ...this.blog,
      ...value
    };
    this.blogService.updateBlog(data)
      .subscribe(next => {
        this.router.navigateByUrl('/blog');
      });
  }

}
