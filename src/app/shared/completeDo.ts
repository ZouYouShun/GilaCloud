import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const completeDo = (cb: Function) => <T>(source: Observable<T>) =>
  new Observable<T>(observer => {
    return source.subscribe({
      next(x) {
        observer.next(x);
      },
      error(err) {
        observer.error(err);
      },
      complete() {
        cb();
        observer.complete();
      }
    });
  });

export const completeDoTo = (to: Observable<any>) => <T>(source: Observable<T>) =>
  new Observable<T>(observer => {
    return source.subscribe({
      next(x) {
        observer.next(x);
      },
      error(err) {
        observer.error(err);
      },
      complete() {
        to.pipe(take(1)).subscribe();
        observer.complete();
      }
    });
  });
