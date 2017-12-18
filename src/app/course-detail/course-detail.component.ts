import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../shared/model/course';
import {Lesson} from '../shared/model/lesson';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;

    constructor(private route: ActivatedRoute) {
                // Does not need application services injected
                // private coursesService: CoursesService,
                // private userService: UserService)

    }

    ngOnInit() {

        this.course$ = this.route.data.map(data => data['detail'][0]);
        this.lessons$ = this.route.data.map(data => data['detail'][1]);

        // No longer responsible for fetching the data from the backend
        /* this.course$ = this.route.params
            .switchMap(params => this.coursesService.findCourseByUrl(params['id']))
            .first()
            .publishLast().refCount();

        this.lessons$ = this.course$
            .switchMap(course => this.coursesService.findLessonsForCourse(course.id))
            .first()
            .publishLast().refCount();
        */

    }


}
