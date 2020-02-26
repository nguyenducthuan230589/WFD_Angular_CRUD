import {Component, OnInit} from '@angular/core';
import {Blog} from '../../../interface/blog';
import {BlogService} from '../../../services/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  blog: Blog[];

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.blog = this.blogService.blogList;
  }

  ngOnInit(): void {
    this.blogService.getBlog().subscribe(next => (this.blog = next), error => (this.blog = []));
  }
}
