import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { MainService } from "../main.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  subscription: Subscription;
  outcode: string;
  details: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    private router: Router,
  ) {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.outcode = params['id'];
    });
  }

  ngOnInit() {
    this.mainService.showDetails(this.outcode)
      .subscribe( res => {
        if( res.status === 200) {
          this.details = res.result;
        }
      });
  }
  goHome(): void {
    this.router.navigate(['']);
  }
}
