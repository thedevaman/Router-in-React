import {Link} from "react-router-dom";
function DynamicRoute(){
    let users=[
        {id:1,name:'aman',email:'aman@test'},
        {id:2,name:'akash',email:'akash@test'},
        {id:3,name:'rahul',email:'rahul@test'},
        {id:4,name:'amit',email:'amit@test'},
        {id:5,name:'ankit',email:'ankit@test'},
        {id:6,name:'golu',email:'golu@test'},
        {id:7,name:'molu',email:'molu@test'},
    ]

    return (
        <div>
            <h1>DynamicRoute page</h1>
           {
            users.map((item)=>
            <div><Link to={"/userdetail/"+item.id} key={item.id} state={{name:item.name,email:item.email}}><h3>{item.name}</h3></Link></div>
            )
           }
           
        </div>
    )
}

export default DynamicRoute;