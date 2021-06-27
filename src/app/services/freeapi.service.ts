import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class freeApiService
{

    constructor(private httpClientObj: HttpClient) { }
    

    getComments(): Observable<any>{
        return this.httpClientObj.get("https://api.covid19api.com/country/India?from=2021-06-01T00:00:00Z&to=2021-06-26T00:00:00Z");
    }


}