import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  code: string;
  codes: any = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
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
