import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const credentials = localStorage.getItem('credentials');

    if (!credentials) {
      this.router.navigate(['/login']);
      return false;
    }

    const parsed = JSON.parse(credentials);

    if (parsed.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
