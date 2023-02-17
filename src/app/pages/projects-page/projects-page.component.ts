import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  posts!: Observable<any>;

  constructor(private authService: AuthService, private blogPostService: BlogPostService) { }

  ngOnInit() {

    this.posts = this.blogPostService.getPosts();
  }

}

export interface BlogPost {
  // id?: string;
  title?: string;
  // description?: string;
  // mainImage?: string;
  // images?: string[];
}
