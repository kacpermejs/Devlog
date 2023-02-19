import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDoc } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

export interface BlogPostThumbnail {
  title: string;
}

export interface BlogPost {
  title: string;
}

export const MOCK_BLOG_POSTS_THUMBNAILS: BlogPostThumbnail[] = [
  {title: 'sth1'},
  {title: 'sth2'},
  {title: 'sth3'},
  {title: 'sth4'},
  {title: 'sth5'},
]

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  constructor(private firestore: Firestore) { }

  getPosts(): Observable<BlogPostThumbnail[]> {
    const collectionInstance = collection(this.firestore, 'posts');

    return collectionData(collectionInstance) as Observable<BlogPost[]>;

  }

  getPostsMock(): Observable<BlogPostThumbnail[]> {
    return of(MOCK_BLOG_POSTS_THUMBNAILS);
  }
}

