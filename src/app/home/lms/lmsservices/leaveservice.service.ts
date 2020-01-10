import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveserviceService {

  host_url: string;

  constructor(private http: HttpClient) {
    this.host_url = `${environment.host_url}`
  }
  //leave type strats//

  leavetypeget(LeaveType) {
     return this.http.post(this.host_url+'/obs/lms/get', LeaveType);
  }

  leavetypeset(LeaveType) {
    return this.http.post(this.host_url+'/obs/lms/set', LeaveType);
  }

  lmsholidayget(reqObj){
    return this.http.post(this.host_url+'/obs/master/holidays/get', reqObj);
  }
  lmsholidayset(reqObj){
    return this.http.post(this.host_url+'/obs/master/holidays/set', reqObj);
  }

  lmsget(reqObj){
     return this.http.post(this.host_url+'/obs/lms/get',reqObj)  
  }
  lmsset(reqObj){
     return this.http.post(this.host_url+'/obs/lms/set',reqObj)
  }
}
