import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseInfo: {courseld: string, courseName: string, durationHours: number, passScore: number, instructorld:number}[] = [];
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseInfo = this.courseService.coursedetails;
  }

}
