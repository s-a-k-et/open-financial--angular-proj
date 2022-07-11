import { Component, VERSION } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { fromEvent, tap } from 'rxjs';
interface Board {
  order?: number,
  id: string | number,
  title: string,
  newtask: string,
  showNewcard: boolean,
  tasks: Array<{title: string, id: string,pid: string}>
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  public addList = false;
  public addListData = '';
  public allBoards: Array<Board> = [{
    order : 1,
    id: '1',
    title: 'Todo',
    showNewcard: false,
    newtask: '',
    tasks: [{
      title: 'First',
      id: '1',
      pid: '1',
    },{
      title: 'Second',
      id: '2',
      pid: '1',
    }]
  },{
    order : 2,
    id: '2',
    title: 'Done',
    showNewcard: false,
    newtask: '',
    tasks: [{
      title: 'First',
      id: '1',
      pid: '2',
    }]
  },{
    id: '3',
    title: 'Doing',
    showNewcard: false,
    newtask: '',
    tasks: [{
      title: 'First',
      id: '1',
      pid: '3',
    }]
  }]


  showNewCard(index: number) {
    this.allBoards[index].showNewcard = true;
  }
  public dragstart(event) {
    console.log('dragstart ', event)
  }

  public dragover(event) {

  }

  public drop(event) {
    console.log('drop', event)
  }
  ngOnInit() {
    let dragged = null;

    // const dropEvent = fromEvent(document.getElementsByClassName('eachBoard'),'drop');

    // dropEvent.pipe(
    //   tap(el => console.log(el))
    // ).subscribe(data => {
    //   console.log('drop data', data)
    // })
  }
  public addTask(index: number) : void {
    const taskTitle = this.allBoards[index].newtask;
    this.allBoards[index].tasks.push({
      title: taskTitle,
      id: taskTitle,
      pid: this.allBoards[index].id.toString()
    })
    this.allBoards[index].newtask = ''
    this.allBoards[index].showNewcard = false;
  }
  addNewList() {
    this.addList = true;
  }
  resetPosition(index: number) {
    this.allBoards[index].showNewcard = false;
    this.allBoards[index].newtask = ''
  }
  appendNewList() {
    console.log(this.addListData)
    //disable add button untill no value enterd, later
    //generate id, incremental, later
    if(this.addListData !== '') {
      this.allBoards.push({
        id: (this.allBoards.length + 1).toString(),
        title: this.addListData,
        showNewcard: false,
        newtask: '',
        tasks: []
      })
      this.addListData = ''
    }
  }
  //index of task => pid: this.allBoards[pid].task.splice(i,1)
  dragtask(event) {
   // console.log('dragstart',event)
  }




  //core module => 
  //shared => Card/button,textarea
  //components => task, list component => service()state/
  
}
