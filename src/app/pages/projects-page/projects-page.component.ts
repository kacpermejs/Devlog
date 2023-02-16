import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface BlogPost {
  id?: string;
  title?: string;
  description?: string;
  mainImage?: string;
  images?: string[];
}
