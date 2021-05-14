import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseInfo: {courseld: string, courseName: string, durationHours: number, passScore: number, instructorld:number}[] = [];
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseInfo = this.courseService.coursedetails;
  }

}
