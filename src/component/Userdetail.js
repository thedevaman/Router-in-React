// import {withRouter} from 'react-router-dom'
import {useParams,useLocation} from 'react-router-dom'
function Userdetail(){
    
    const params = useParams();
    const {id} = params;
    const location = useLocation();
    console.log(location.state)

   
// console.warn(prop)

    return(
        <div>
        
                    <h1>This is {location.state.name}, coming through state with the help of locaton</h1>
                    <h1>email is {location.state.email}</h1>
                    <h1>id is {id} coming through params </h1>
            
        </div>
    )
}

export default Userdetail