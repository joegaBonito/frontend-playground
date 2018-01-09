import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  data: string;
  value: string;
  number: number;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map(
      (data: number) => {
            return data * 2;
      }
    );
    let numberDom = <HTMLElement>document.querySelector(".number");
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        numberDom.innerText += number + "\n";
        if(number >= 10) {
          this.numbersObsSubscription.unsubscribe();
        }
      }
    );


    const myObservable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        //observer.error('This does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    let dataDom = <HTMLElement>document.querySelector(".data");
    this.customObsSubscription = myObservable.subscribe((data: string) => {
      dataDom.innerText += data + "\n";
    });
    var mySubObservable = new Subject();
    mySubObservable.subscribe((value: string) => {
      this.value = value
    });
    mySubObservable.next('foo');

    //emit (1,2,3,4,5)
    const source = Observable.from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example = source.map(val => val + 10);
    //output: 11,12,13,14,15
    let mapDom = <HTMLElement> document.querySelector(".map");
    const subscribe = example.subscribe(val => {
      mapDom.innerText += val + "\n";
    });
  }
}
