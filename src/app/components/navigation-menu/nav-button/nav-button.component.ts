import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {
  @Input() routerLinkString?: string;
  @Input() outsideLinkString?: string;
  @Input() buttonText?: string;
  constructor() { }

  ngOnInit() {
  }

}
