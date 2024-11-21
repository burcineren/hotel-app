import {computed, inject, Injectable, signal} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map, merge, Observable} from 'rxjs';
import {Actions, ofType} from "@ngrx/effects";

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private router = inject(Router);
  private actions$ = inject(Actions);

  private loader = signal(false);

  layoutLoading = computed(() => this.routerLoading() || this.actionsLoading() || this.loader());

  ActionsToListen = signal([]);

  private actionsLoading(): Observable<boolean> {
    const actionsToListen = this.ActionsToListen();

    const dispatched$ = this.actions$.pipe(
      ofType(...actionsToListen),
      map(() => true),
    );

    const canceled$ = this.actions$.pipe(
      ofType(...actionsToListen),
      map(() => false),
    );

    const errored$ = this.actions$.pipe(
      ofType(...actionsToListen),
      map(() => false),
    );

    const successful$ = this.actions$.pipe(
      ofType(...actionsToListen),
      map(() => false),
    );

    return merge(dispatched$, canceled$, errored$, successful$);
  }


  private routerLoading = toSignal(
    this.router.events.pipe(
      filter(
        (event) =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError,
      ),
      map((event) => event instanceof NavigationStart),
    ),
  );

  hideLoader() {
    this.loader.set(false);
  }

  showLoader() {
    this.loader.set(true);
  }
}
