import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BlogPostService, BlogPostThumbnail } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  posts$!: Observable<BlogPostThumbnail[]>;

  constructor(private authService: AuthService, private blogPostService: BlogPostService) { }

  ngOnInit() {

    //this.posts$ = this.blogPostService.getPosts();
    this.posts$ = this.blogPostService.getPostsMock();
  }



}


