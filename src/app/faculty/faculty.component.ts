import { Component, OnInit } from '@angular/core';
import { FacultyService } from './faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  public facultyMembers: {
    facultyld: number, 
    facultyName: string, 
    facultyMobile: string, 
    facultyEmail: string,
    highestQualification: string, 
    workLocation: string
  }[]= [];

  constructor(private facultyService:FacultyService) { }

  ngOnInit(): void {
    this.facultyMembers = this.facultyService.faculty;
  }

}
