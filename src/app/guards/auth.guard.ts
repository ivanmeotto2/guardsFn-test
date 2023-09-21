import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { LOGGED_IN } from '../misc/consts';

/**
 * Guard that checks if a user is authenticated or not
 *
 * @param {ActivatedRouteSnapshot} route - Current navigation route
 * @param {RouterStateSnapshot} state - Current route state
 * @returns {boolean} `true` or `false` respectively if the user can or cannot navigate on this route
 */
export const authGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const canPass = !!localStorageService.get(LOGGED_IN);
  console.log('CAN I PASS?', canPass);
  return canPass ? true : router.navigate(['route-1']);
};
