import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_ENDPOINTS } from 'config/api.config';
import {EmailSchedule} from '../interfaces/email-shedule.interface'
import {FilterDate} from '../interfaces/filter-date.interface'
@Injectable({
  providedIn: 'root'
})
export class EmailSheduleService {

  constructor(private http : HttpClient) { }

  getAllEmailShedule(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.getAllEmailShedule}`;
    return this.http.get(url)
  }
  sheduleEmail(data:EmailSchedule){
    const url = `${API_BASE_URL}${API_ENDPOINTS.sheduleEmail}`;
    return this.http.post(url,data)
  }
  filterEmail(data:FilterDate){
    const url = `${API_BASE_URL}${API_ENDPOINTS.filterEmail}`;
    return this.http.post(url,data)

  }
}
