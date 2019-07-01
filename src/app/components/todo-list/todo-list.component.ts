import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  isPageLoaded:boolean=false;
 name:string="Esraa";
 tasksList:Task[]=[];
  constructor(private http:HttpClient,private taskService:TaskService) { }

  ngOnInit(): void {

    this.taskService.getAll().subscribe(response=>{
      this.tasksList=response as Task[];
      this.isPageLoaded=true;
      //alert("from server");
    },error=>{
      alert("sorry ,error occured");
    });
    //alert("finished");
  }

 changeStatus(task:Task)
 {
   this.taskService.put(task).subscribe();
   //alert(task.Done);

   //task.Done=!task.Done;
  // if(task.Done==true)
  // {
  //   task.Done=false;
  // }
  // else{
  //   task.Done=true;
  // }
 }
 removeTask(index:number) 
 {
   
   let deletedTask:Task=this.tasksList[index];
   this.taskService.delete(deletedTask.ID).subscribe();
   this.tasksList.splice(index,1);
  }
getPendingTasks()
{
  // let pendingTasks:Task[]=[];
  // pendingTasks=this.tasksList.filter(x=>x.Done==false);
  // return pendingTasks.length;
  return this.tasksList.filter(task=>task.Done==false).length;
  return this.tasksList.length;
}
addTask(title:string)
{
  if(title=="" || title==undefined)
    return
    if(this.tasksList.filter(x=>x.Title==title).length==0)
    {
      let newTask:Task=new Task();
      newTask.Title=title;
      this.tasksList.unshift(newTask);
      this.taskService.create(newTask).subscribe(response=>{
      newTask.ID=response as number;
      });
    }
}
}
