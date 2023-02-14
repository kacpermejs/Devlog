import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostThumbnailComponent } from './blog-post-thumbnail/blog-post-thumbnail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogPostThumbnailComponent
  ],
  exports: [
    BlogPostThumbnailComponent
  ]
})
export class SharedModule { }
