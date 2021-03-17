import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id}= useParams();
    const {data:blog,err,isloading} =useFetch(`http://localhost:8000/blogs/${id}`);
    console.log(blog);
    return ( 
        <div className="blog-details">
        {isloading && <div> data is loading !!!</div>}
        {err && <div>{err}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <h3>written by: {blog.author}</h3>
                <div>
                    <p style={{'text-align': 'justify'}}>
                        {blog.body}
                    </p>
                </div>
            </article>
        )}

        </div>
     );
}
 
export default BlogDetails;