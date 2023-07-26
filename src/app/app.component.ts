import { Component } from '@angular/core';
import { VersionService } from './core/services/version.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor() { }

  showProducts() {
    const modal = document.createElement('div');
    modal.innerHTML = '<app-products></app-products>';
    document.body.appendChild(modal);
  }
  
}
