import {Link} from 'react-router-dom'

function Navbar()
{
    return(<div>
       
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
    </div>)
}
export default Navbar