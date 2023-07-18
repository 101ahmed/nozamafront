import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {

  @Input()
  appVersion = '?';

  affiche = true;

  toggle() {
    this.affiche = ! this.affiche;
    console.info("VU", this.affiche);
  }

}
