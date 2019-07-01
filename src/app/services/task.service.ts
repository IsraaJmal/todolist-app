import { Task } from '../.../../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(private http:HttpClient) { }
  
  create(task:Task)
  {
   return this.http.post(`${environment.baseURL}/Task/Post`,task);
  }
  getAll(){
    return this.http.get(`${environment.baseURL}/Task/get`)
  }
  getById(id){
    return this.http.get(`${environment.baseURL}/Task/get/${id}`)

  }
  delete(id){
    return this.http.delete(`${environment.baseURL}/Task/get/${id}`)

  }
  put(task:Task){
    return this.http.put(`${environment.baseURL}/Task/put`,task)
  }
  
}
