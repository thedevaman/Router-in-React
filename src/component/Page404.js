import { Link } from "react-router-dom"

function Page404(){
    return(
        <div>
            <h1>This is 404 page</h1>
            <Link to="/">Go to homePage</Link>
        </div>
    )
}

export default Page404