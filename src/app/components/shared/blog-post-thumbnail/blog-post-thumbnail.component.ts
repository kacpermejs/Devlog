import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-thumbnail',
  templateUrl: './blog-post-thumbnail.component.html',
  styleUrls: ['./blog-post-thumbnail.component.scss']
})
export class BlogPostThumbnailComponent {
  title: string = "Blog post title"
  thumbnailImageSourcePath: string = "./assets/thesisScreanshot.png";
  altImageMessage: string = "post icon";

  constructor() { }

}
