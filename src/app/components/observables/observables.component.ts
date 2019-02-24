import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, from, fromEvent, of } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})

export class ObservablesComponent implements OnInit {

  

  constructor() { }

  

  ngOnInit() {

    // creating and observable from the "fromEvent" method
    // const el = document.getElementById('button');
    // const mouseMoves = fromEvent(el, 'mousemove');
    // const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    // });

    // creating an observable using the "from" method an Array
    // const nums = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    // nums.subscribe(x => console.log(x));

    // creating an observable using the "of" method on a list
    // const nums = of(1, true, 'string', null);
    // nums.subscribe(x => console.log(x));

    
    const observable = Observable.create((subscribe: any) => {
      subscribe.next("Hey guys!");
    });

    observable.subscribe((x: any) => console.log(x));

    // let observer = {
    //   next: (value) => {
    //     console.log(value);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    //   complete: () => {
    //     console.log("finished");
    //   }
    // };





    observable.subscribe()

  }

}
