import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlogService} from '../../../services/blog.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Blog} from '../../../interface/blog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  blog: Blog = {
    id: 0,
    title: '',
    content: ''
  };
  sub: Subscription;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.blogService.getBlogById(Number(id)).subscribe(next => {
        this.blog = next;
      });
    });
  }
}
