import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FacultyService } from './faculty/faculty.service';
import { CourseService } from './course/course.service';
import { CourseFacultyComponent } from './course-faculty/course-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    CourseComponent,
    CourseDetailsComponent,
    PageNotFoundComponent,
    CourseFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FacultyService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
