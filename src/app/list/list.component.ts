import {Component, OnInit, Input, OnChanges } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() codes = [];
  allCodes: any[] = [];
  query: string;
  sortValues: any[] = [
    {title: 'descending', value: 1},
    {title: 'ascending', value: 2}
    ];
  inputObs$: Observable<any>;

  constructor( private mainService: MainService) { }
  ngOnChanges() {
    if ( this.codes.length) {
      this.allCodes = this.codes.slice();
      console.log(this.codes, this.allCodes);
    }
  }
  ngOnInit() {

    this.onFilter();

  }

  onSort(value) {
    if ( value == 1 ) {
      this.codes.sort((a, b) =>  {
        return 1;
      });
    } else if ( value == 2) {
      this.codes.sort((a, b) =>  {
        return -1;
      });
    }
  }

  onFilter() {
    const filterField = document.querySelector('.fiterInput');
    if (filterField) {
      this.inputObs$ = fromEvent(filterField, 'input');
      this.inputObs$.subscribe(event => {
        this.query = event.target.value;
        this.allCodes = this.codes.filter(item => item.postcode.toLowerCase().includes(this.query.toLowerCase()));
      });
    }
  }

}
