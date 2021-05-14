import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FacultyService } from '../faculty/faculty.service';

@Component({
  selector: 'app-course-faculty',
  templateUrl: './course-faculty.component.html',
  styleUrls: ['./course-faculty.component.css']
})
export class CourseFacultyComponent implements OnInit {
  instructorId:number = 0;
  facultyFound = false;

  public facultyMembers: any;

  constructor(private route:ActivatedRoute, private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.instructorId = +params['id'];
        this.facultyMembers = this.facultyService.getFaculty(this.instructorId);
        this.facultyFound = ( this.facultyMembers == undefined) ? false : true;
      }
    );
  }

}
