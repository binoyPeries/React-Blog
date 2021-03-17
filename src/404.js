import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry!!!</h1>
            <h3>The page can not be found</h3>
            <Link to={'/'}>  Back to Homepage </Link>

        </div>
     );
}
 
export default Error404;