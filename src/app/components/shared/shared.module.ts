import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostThumbnailComponent } from './blog-post-thumbnail/blog-post-thumbnail.component';
import { AuthService } from 'src/app/services/auth.service';
import { BlogPostService } from 'src/app/services/blog-post.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogPostThumbnailComponent
  ],
  exports: [
    BlogPostThumbnailComponent
  ],
  providers: [
    AuthService,
    BlogPostService
  ]
})
export class SharedModule { }
