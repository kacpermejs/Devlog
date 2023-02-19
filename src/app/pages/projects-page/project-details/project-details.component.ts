import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectId: string | null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
