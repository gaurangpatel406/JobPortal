import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/Services/jobs.service';
import { Observable, map,switchMap,of,tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs$!:Observable<any[]>;
constructor(private jobservice: JobsService){

  }
  ngOnInit(){
    this.jobs$=this.jobservice.getJobsLIst('All');
  }
}

