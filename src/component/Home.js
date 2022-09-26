import { Link,useNavigate } from "react-router-dom"

function Home()
{
    const navigate = useNavigate();
  
    const navTopage =(url)=>{
        
        let x=true;
        if(x){
            navigate(url);
        }else{
            navigate('/about')
        }

        // if(x){
        //     navigate('/about')
        // }else{
        //     navigate('/filter')
        // }

    }
        
        
return<>
<h1>Home Page</h1>
<p>This is Home Page through React Router</p>
<Link to="/about">Go to About Page</Link>
<br/>
<button onClick={()=>navigate('/about')}>go to about Page</button>
<br/>
<button onClick={()=>navigate('/filter')}>go to filter Page</button>
<br/>
<button onClick={()=>navTopage('/about')}>go to about Page through function with condition</button>
<br/>
<button onClick={()=>navTopage('/filter')}>go to filter Page through function with Condition</button>
</>
}

export default Home