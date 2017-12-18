import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Lesson} from '../shared/model/lesson';
import {Course} from '../shared/model/course';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {CoursesService} from '../services/courses.service';


@Injectable()
export class CourseDetailResolver implements Resolve<[Course, (Lesson[])]> {

    constructor(private coursesService: CoursesService) {

    }

    // upon route transition from home to coursedetail screen will load the data tupil
    // will emit the data tupil as it is loaded from the backend
    // will make the data available to the CourseDetailComponent by the route
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<[Course, (Lesson[])]> {

        const data = this.coursesService.findCourseByUrl(route.params['id'])
            .switchMap(course => this.coursesService.findLessonsForCourse(course.id),
                (course, lessons, outerindex, innerIndex) => [course, (lessons)]);
        return data;
            /*
            .switchMap(course => this.coursesService.findLessonsForCourse(course.id),
                (course, lessons) => [course,lessons] );
            */
    }

}