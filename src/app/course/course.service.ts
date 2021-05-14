import { Injectable } from "@angular/core";

@Injectable()   
export class CourseService{
    coursedetails = [
        {"courseld":"501","courseName":"Software DevelopmentLifeCycle", "durationHours":48,"passScore":55,"instructorld":102},
        {"courseld":"E01","courseName":"Embedded C Programming","durationHours":56,"passScore":55, "instructorld":101},
        {"courseld":"D01","courseName":"Programming using C#", "durationHours":48,"passScore":55,"instructorld":103},
        {"courseld":"P01","courseName":"Python Programming","durationHours":56,"passScore":55,"instructorld":104},
        {"courseld":"801","courseName":"Programming using C","durationHours":48,"passScore":55, "instructorld":107},
        {"courseld":"B02","courseName":"Programming using C++","durationHours":48,"passScore":55,"instructorld":105},
        {"courseld":"J01","courseName":"Java Programming","durationHours":48,"passScore":60, "instructorld":106},
        {"courseld":"02","courseName":"Advance Java Programming","durationHours":48,"passScore":55, "instructorld":108},
        {"courseld":"D02","courseName":"ASP.Net Programming","durationHours":56,"passScore":55, "instructorld":103},
        {"courseld":"J03","courseName":"Front endTechnologies","durationHours":56,"passScore":55,"instructorld":106},
        {"courseld":"201","courseName":"AWS Services","durationHours":56,"passScore":55, "instructorld":100},
        {"courseld":"A02","courseName":"Azure Services","durationHours":56,"passScore":55, "instructorld":100}
    ];  
    
    
}