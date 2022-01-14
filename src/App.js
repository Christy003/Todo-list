import React from "react";
import {useState} from "react"
// import Input from "./components/Input.js";
import {connect} from "react-redux"
import {add,deletetodo} from "../src/actions/action.js";
function App(props){
    const[todo,settodo]=useState("");
    console.log(props,"todoss")
    
    return(
    <div className="todolist">
    
     <h2>TODO List,{props.title}</h2>

     <input placeholder="add todo here" value={todo} onChange={(e)=>settodo(e.target.value)}/>
       <button onClick={()=>props.add(todo)}>Add</button>
        {/* <button onClick={()=>props.deletetodo()}>DELETE</button> */}
      
     
      <div>  
          {
         props.todos && props.todos.map((data) => <ul> <li key={data.id}>{data.data}<div onClick={()=>props.deletetodo(data.id)} > Undo</div> </li></ul>)
        
        }
         
    </div>
     
    


     </div>
    );
}
const mapStateToProps = (state)=>{
    return{
        todos:state.todo.list,
    
     }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        add:(data)=> dispatch(add(data)),
        deletetodo:(key)=>dispatch(deletetodo(key))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
