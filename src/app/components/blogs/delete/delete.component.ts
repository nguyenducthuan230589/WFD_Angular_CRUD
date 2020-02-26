import {Component, OnInit} from '@angular/core';
import {Blog} from '../../../interface/blog';
import {Subscription} from 'rxjs';
import {BlogService} from '../../../services/blog.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  blog: Blog;
  sub: Subscription;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.blogService.getBlogById(Number(id)).subscribe(next => {
        this.blog = next;
      });
    });
  }
  deleteBlog() {
    this.blogService.deleteBlog(this.blog.id).subscribe(
      () => {
        this.route.navigateByUrl('/blog');
      });
  }
}
