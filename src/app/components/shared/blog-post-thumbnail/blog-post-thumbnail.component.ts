import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-blog-post-thumbnail',
  templateUrl: './blog-post-thumbnail.component.html',
  styleUrls: ['./blog-post-thumbnail.component.scss']
})
export class BlogPostThumbnailComponent {
  @Input() title: string = "Blog post title"
  thumbnailImageSourcePath: string = "./assets/thesisScreanshot.png";
  altImageMessage: string = "post icon";

  constructor() { }

}
