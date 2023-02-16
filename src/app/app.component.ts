import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
    console.log("app id:");
    console.log(environment.firebase.projectId);
    console.log("Production mode: " + environment.production);
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
