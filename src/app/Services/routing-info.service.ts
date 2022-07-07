import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingInfoService {
  private route: string[] = [];
  constructor(private currentRoute: ActivatedRoute) {
    this.currentRoute.paramMap.subscribe((paramsMap) => {
      this.route = paramsMap.keys;
    });
  }

  get currentRouteData() {
    return this.route;
  }
}
