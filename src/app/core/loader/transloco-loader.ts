import { TranslocoLoader } from '@jsverse/transloco';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class translocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<any> {
    return of({
      en: { welcome: 'Welcome' },
      es: { welcome: 'Bienvenido' },
    }[lang]);
  }
}