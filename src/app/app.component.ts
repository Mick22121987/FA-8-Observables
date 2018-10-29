import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    const obs = Observable.create((observer: Observer<any>) => {
      const data = 2;
      observer.next(2);
      observer.next(3);
      observer.next(4);

      setTimeout(() => {
        observer.next(42);
      }, 2000);
      observer.error('error');
      observer.complete();
    });

    const sub = obs.subscribe({
      next: x => console.log('[next] : ', x),
      complete: () => console.log('[complete]'),
      error: e => console.log('[error] : ', e)
    });

    sub.unsubscribe();

    const sub2 = obs.subscribe((x) => {
      console.log(x);
    }, (e) => {
      console.log(e);
    });

    sub2.unsubscribe();
  }

  ngOnDestroy(): void {

  }
}
