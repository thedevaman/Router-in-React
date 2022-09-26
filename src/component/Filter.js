import {useSearchParams,Link} from 'react-router-dom'

function Filter(){
    const [searchParams,setSearchParams] = useSearchParams();
    // console.warn(searchParams.get('age'));
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return (
        <div>
            <h1>Filter page</h1>
            <h3>Age is:{age}</h3>
            <h3>City is:{city}</h3>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:10})} name="" id="" placeholder='set text in ouery' />
            <button onClick={()=>setSearchParams({age:40})}>Set Age in Query </button>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Filter;