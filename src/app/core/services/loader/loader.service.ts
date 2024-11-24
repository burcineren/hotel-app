import { computed, inject, Injectable, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, merge } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private router = inject(Router);
  private actions$ = inject(Actions);

  private loader = signal(false); // Manual loader state

  layoutLoading = computed(
    () => this.routerLoading() || this.actionsLoading() || this.loader()
  );

  ActionsToListen = signal<string[]>([]); // List of actions to listen for loading

  private actionsLoading = toSignal(
    this.actions$.pipe(
      filter((action) =>
        this.ActionsToListen().includes(action.type)
      ),
      map((action) =>
        action.type.endsWith('Request') ? true : action.type.endsWith('Success') || action.type.endsWith('Failure') ? false : null
      )
    )
  );

  private routerLoading = toSignal(
    this.router.events.pipe(
      filter(
        (event) =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
      ),
      map((event) => event instanceof NavigationStart)
    )
  );

  showLoader() {
    this.loader.set(true);
  }

  hideLoader() {
    this.loader.set(false);
  }
}
