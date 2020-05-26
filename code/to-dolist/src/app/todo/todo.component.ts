import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  itemCount:number;
  todoItemText:string;
  todoItems=[];

  ngOnInit() {
    console.log('liuxing test ngOnInit');
    this.itemCount=this.todoItems.length;
  }

  addTodoItem(){
    console.log('liuxing test addTodoItem');
    this.todoItems.push(this.todoItemText);
    console.log(this.todoItems);
    this.todoItemText="";
    this.itemCount=this.todoItems.length;
  }

}
