import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { CovidData } from './model/coviddata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food-On-Train';
  listOfData: CovidData[];

  constructor(private service: freeApiService){
    this.listOfData = []; 
  }

 
  /*
  ngOnInit(){
    console.log("########### - Entering ngOnInit")
    this.service.getComments()
    .subscribe
    (
      data=>
      {
          console.log("########### - Printing inside Subscribe");
          console.log(data);
          this.listOfData = data;
      }
    );
    console.log("########### - Exit ngOnInit");
    console.log(this.listOfData);
  }
  */

  ngOnInit(){
    
    this.service.getComments()
    .subscribe
    (
      successData => {
          console.log("########### - Printing inside Success Block");
          console.log(successData);
          this.listOfData = successData;
      },
      error => {
        console.log("########### - Printing inside Success Block");
      },
      () => {
          console.log("########### - Printing inside Complete Block");
          this.afterSubscribeComplete();
      }
    );
    console.log("########### - Exit ngOnInit");
    
  }

  afterSubscribeComplete(){
    console.log("########### - afterSubscribeComplete");
    console.log(this.listOfData);
  }

}
