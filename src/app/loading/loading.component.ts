import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NavigationStart, Router, RoutesRecognized} from '@angular/router';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {

    loading$: Observable<boolean>;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.loading$ = this.router.events
            .map(evt =>  evt instanceof NavigationStart || evt instanceof RoutesRecognized);
    }

}
