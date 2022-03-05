import { makeObservable, observable,action,computed,autorun } from "mobx";

 


class ObservableTodoStore {
    todos = [];

  activeIndex='null';
    constructor() {
      makeObservable(this, {
        todos: observable,
        activeIndex:observable

      });

    }
  

    handleSubmit(e) {
        e.preventDefault();    console.log('You clicked submit.');
      }
      addTask(task,option){
          this.todos.push({
              task:task,
              completed:option
          });
          console.log(this.todos)
      }
     setIndex(index){
      this.activeIndex=index;
     }
     updateTask(updatedOption){
this.todos[this.activeIndex].completed=updatedOption;
     }
  }
  
  const observableTodoStore = new ObservableTodoStore();
  export default observableTodoStore;