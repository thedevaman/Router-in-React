import { Link } from "react-router-dom"

function Home()
{
return<>
<h1>Home Page</h1>
<p>This is Home Page through React Router</p>
<Link to="/about">Go to About Page</Link>
</>
}

export default Home