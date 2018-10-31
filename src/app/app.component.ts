import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subject, Subscription, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    // Gestion des observables
      console.log('Gestion des observables');
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

    // Gestion des subjects
      console.log('Gestion des subjects');
      const subj = new BehaviorSubject<number>(0);

    subj.next(1);

    const s1 = subj.subscribe( (x: number) => {
      console.log('[S1] : ', x);
    });

    // subj.next(2);

    const s2 = subj.subscribe( (x: number) => {
      console.log('[S2] : ', x);
    });

    // subj.next(3);

    s1.unsubscribe();

    // subj.next(4);

  }

  ngOnDestroy(): void {

  }
}
