const initialdata={
    list:[],
    title:"todolist"
}
const todoreducer=(state=initialdata,action)=>{
    switch(action.type){
     case "ADD":
         console.log(action.payload)
         return{
            ...state,
           list:
           [...state.list,
            action.payload]
        
            }
     case "DELETE" :  

        return {
              ...state,   
            list: state.list.filter((todo) => { todo.id!== action.payload       })    
                 
                
              }  
    default:
        return state;
    }
}
export default todoreducer;



