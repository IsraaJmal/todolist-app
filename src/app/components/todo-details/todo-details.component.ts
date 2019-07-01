import { TaskService } from './../../services/task.service';

import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
 task:Task=new Task();
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private taskService:TaskService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
    let id:number=+params.get('id');
    if(id==0)
    {

    }
    else{
      this.taskService.getById(id).subscribe(response=>{
      if(response==null)
      {
        
      }  
      this.task=response as Task;
      });
    }
    
    });
  }

}
