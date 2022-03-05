import React,{Component} from "react";
import { StoreContext } from "./index";
class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {taskName:'',option:'Yes',options:['Yes','No']};
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();    console.log('You clicked submit.');
        this.props.store.addTask(this.state.taskName,this.state.option);
        this.setState({taskName:'',option:'Yes'})
         
      }
       handleDropdownChange(e){
           this.setState({option:e.target.value});
           console.log('selected'+this.state.option)
       } 
    render() {
        
      return <form id='toDoForm'>
       <div className="form-field">
        
       <input className="taskNameInput" value={this.state.taskName} type='text' placeholder="Enter task Name" onChange={(e)=> {this.setState({taskName:e.target.value});}}/>
       </div>
         <div className="form-field">
             <label className="form-label">Is it done ? </label>
         <select name="cars" id="cars" form="toDoForm" onChange={this.handleDropdownChange}>
  <option selected={this.state.option === this.state.options[0] ? true : false}  value={this.state.options[0]}  >{this.state.options[0]}</option>
  <option selected={this.state.option === this.state.options[1] ? true : false} value={this.state.options[1]}>{this.state.options[1]}</option>
 
</select>
         </div>
 
<input type='submit' value='Submit' onClick={this.handleSubmit } className='subBtn' />

      </form>
 
    }
  }
  export default Child;