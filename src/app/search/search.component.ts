import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  code: string;
  codes: any = [];
  constructor(private mainService: MainService ) { }

  ngOnInit() {
    // this.store.select('data')
    //   .subscribe(state => console.log(state));
  }
  getPostCodes() {
    this.mainService.getCodes(this.code)
      .subscribe( res => {
        if ( res.status === 200 ) {
          this.codes = res.result;
        }
      });
  }

}
