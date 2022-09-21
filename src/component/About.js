import { Link } from "react-router-dom"

function About()
{
return<>
<h1>About Page</h1>
<p>This is about page</p>
<Link to="/">Go to Home Page</Link>
<li> <Link to="/user/anil">Anil</Link></li>
<li> <Link to="/user/aman">Aman</Link></li>
</>
}

export default About