import React,{Component} from "react";
 
import { Observer } from "mobx-react";
import { StoreContext } from "./index";
import Child from "./Child";
 
import { Link } from "react-router-dom";
 


class Parent extends Component {
    render() {
      return <>

<StoreContext.Consumer >
{value => <div>
    <Observer>{() => 
    <div>{value.todos.map((number,index) =>  
    <li key={index} className="todoList">
        Task Name: {number.task} ,Completed: {number.completed}

        <Link className="float-right" to={
    { 
        pathname: "/edit",
     
    }
} >
    <img className="editBtn" src='https://www.svgrepo.com/show/36160/edit-button.svg' onClick={()=> value.setIndex(index)}/></Link>

        </li>)}</div>}
    </Observer>
    
<Child store={value} />

</div>}

</StoreContext.Consumer>

      
       </>;
    }
  }
  export default Parent;