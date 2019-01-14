import { Observable } from 'rxjs';

export const tapLog = (message?: string) => <T>(source: Observable<T>) =>
  new Observable<T>(observer => {
    return source.subscribe({
      next(x) {
        if (message) {
          console.log(`______________${message}______________`);
        }
        console.log(x);
        observer.next(x);
      },
      error(err) {
        console.log('err');
        observer.error(err);
      },
      complete() {
        console.log('complete');
        observer.complete();
      }
    });
  });
