import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Event as NavigationEvent,
  NavigationEnd,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Subject, Subscription } from 'rxjs';

const WAITE_TAB_LOAD: number = 100;

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy, CanActivate {
  private handleNavigatedUrlSubject = new Subject<string>();
  handleNavigatedUrl = this.handleNavigatedUrlSubject.asObservable();

  private handleCanActivateUrlSubject = new Subject<string>();
  handleCanActivateUrl = this.handleCanActivateUrlSubject.asObservable();

  routerEvents: Subscription;
  navigateWithoutValidations: boolean = false;

  constructor(private router: Router) {
    this.routerEvents = router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        // After Navigation

        // Waiting 50 ms for to handle the url after the component is loaded
        setTimeout(() => {
          var url = event.urlAfterRedirects || event.url;
          this.handleNavigatedUrlSubject.next(url == '/' ? '' : url);
        }, WAITE_TAB_LOAD);
      }
    });
  }

  navigate(url: string, ...paramsValues: (string | number)[]): any {
    if (this.navigateWithoutValidations && this.router.url == url) {
      //If the router.url is the same as the url, router will not navigate again, so need to manual clear the navigateWithoutValidations flag
      this.navigateWithoutValidations = false;
    }

    let params = paramsValues != null && paramsValues.length > 0 ? paramsValues : [];

    params.unshift(url);
    this.router.navigate(params);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.navigateWithoutValidations) {
      this.navigateWithoutValidations = false;
      return true;
    } else {
      this.handleCanActivateUrlSubject.next(state.url);
      return false;
    }
  }

  ngOnDestroy(): void {
    this.routerEvents.unsubscribe();
  }
}
