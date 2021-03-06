import { Injectable } from "@angular/core";

@Injectable()
export class FacultyService{
    faculty = [
        {"facultyld":101,"facultyName":"Vivek","facultyMobile":"9998887771","facultyEmail":"vivek@abc.com","highestQualification":"Dr","workLocation":"Mysore"},
        {"facultyld":102,"facultyName":"Pridhvi","facultyMobile":"6668887772","facultyEmail":"pridhvi@abc.com", "highestQualification":"Dr","workLocation":"Bangalore"},
        {"facultyld":103,"facultyName":"Patrick","facultyMobile":"8889997773","facultyEmail":"patrick@abc.com","highestQualification":"ME","workLocation":"Mysore"},
        {"facultyld":104,"facultyName":"Rajesh","facultyMobile":"9988987674","facultyEmail":"rajesh@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
        {"facultyld":105,"facultyName":"Bhargav","facultyMobile":"9898785671","facultyEmail":"bhargav@abc.com", "highestQualification":"ME","workLocation":"Bangalore"},
        {"facultyld":106,"facultyName":"Ajay", "facultyMobile":"8978187541","facultyEmail":"ajay@abc.com", "highestQualification":"ME","workLocation":"Hyderabad"},
        {"facultyld":107,"facultyName":"Bharath","facultyMobile":"7876527713","facultyEmail":"bharath@abc.com", "highestQualification":"ME","workLocation":"Bangalore"},
        {"facultyld":108,"facultyName":"Thiruppathi","facultyMobile":"9894147084","facultyEmail":"thiruppathi@abc.com", "highestQualification":"ME","workLocation":"Mysore"}
    ];


    getFaculty(facultyId: number) {
        const factulyInfo = this.faculty.find(
            (s) => {
            return s.facultyld === facultyId;
            }
        );
        return factulyInfo;
    }
    
}