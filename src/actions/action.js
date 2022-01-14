export const add = (data) =>{
    console.log(data)
    return{
        type:"ADD",
        payload:
        {
         data:data,
        id:Math.random()
        }
        
    };
};

export const deletetodo =(key)=>{
    console.log(key)
    return{
        type:"DELETE",
         payload:key
    }
}
