import {useParams,useLocation} from 'react-router-dom'

function User(){
    
    const params = useParams();
    const {name} = params;
    const location = useLocation();
    console.log(location.state.name)
  


    return(
        <div>
            <h1>This is {name} Page</h1>
            <h1>This is {name} Page with state "{location.state.name}"</h1>
        </div>
    )
}

export default User