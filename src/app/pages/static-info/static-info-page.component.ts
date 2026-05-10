import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-static-info-page',
  templateUrl: './static-info-page.component.html',
  styleUrls: ['./static-info-page.component.css'],
})
export class StaticInfoPageComponent implements OnDestroy {
  heading = '';
  body = '';
  private readonly sub: Subscription;

  constructor(private readonly route: ActivatedRoute) {
    this.sub = this.route.data.subscribe((data) => {
      const d = data as { heading?: string; body?: string };
      this.heading = d.heading ?? 'Nozama';
      this.body = d.body ?? '';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
