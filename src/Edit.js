import React,{Component} from "react";
import { History } from "history";
import { Location as location }  from "react-router";
import { StoreContext } from "./index";
import { Observer } from "mobx-react";
import observableTodoStore from "./store/Store";
import { Link } from "react-router-dom";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption:observableTodoStore.todos[observableTodoStore.activeIndex].completed,options:[
      {
        optionValue:'Yes',
        boolean:true
      },
      {
        optionValue:'No',
        boolean: false
      }
    ]};
     
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
}
 
handleDropdownChange(e){
  this.setState({selectedOption:e.target.value});
  console.log('selected '+this.state.selectedOption)
} 
    render() {
      return <>
<p className="editPage">
<Observer>{() => 
    <div>
      {/* selected = {this.state.option === option.value ? true : false} <p>Task Name : {observableTodoStore.todos[observableTodoStore.activeIndex].observableTodoStore.todos.task}</p> */}
    <p>Task : {observableTodoStore.todos[observableTodoStore.activeIndex].task}</p>
    <label className="form-label">Is it done ? </label>
         <select name="cars" id="cars" form="toDoForm" onChange={this.handleDropdownChange} >
  <option selected = {this.state.selectedOption === this.state.options[0].optionValue ? true : false} value={this.state.options[0].optionValue} >{this.state.options[0].optionValue}</option>
  <option selected = {this.state.selectedOption === this.state.options[1].optionValue ? true : false} value={this.state.options[1].optionValue} >{this.state.options[1].optionValue}</option>
 
</select>
<br/>
<Link className="updateBtn" to={
    { 
        pathname: "/",
     
    }
}>
<button onClick={() => observableTodoStore.updateTask(this.state.selectedOption)}>Update</button>
</Link>
    </div>}
    </Observer>
    
</p>

      </>
    }
}
export default Edit;