import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogPost } from '../pages/projects-page/projects-page.component';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {



  constructor(private firestore: Firestore) { }

  getPosts(): Observable<any> {
    const collectionInstance = collection(this.firestore, 'posts');

    return collectionData(collectionInstance);

  }
}
