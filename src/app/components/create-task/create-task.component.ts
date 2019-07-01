
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../models/task';

import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task:Task=new Task();
  taskForm:FormGroup;
  constructor(private taskService:TaskService,private fromBuilder:FormBuilder ,private route:Router) { }

  ngOnInit() {
    this.taskForm=this.fromBuilder.group({
      Title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$")]]
    })
    
  }
  save()
  {
    Object.assign(this.task,this.taskForm.value);
   this.taskService.create(this.task).subscribe(response=>{
      alert(`Done ,your task ID is : ${response}`); 
      this.route.navigate(['/todo']) 
  });

 

  }

}
