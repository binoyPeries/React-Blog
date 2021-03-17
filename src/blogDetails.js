import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id}= useParams();
    const {data:blog,err,isloading} =useFetch(`http://localhost:8000/blogs/${id}`);
    const his = useHistory();
    const handleDelete =()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            his.push('/');
        }).catch((e)=>{
            console.log(e.message);
        })

    }
    return ( 
        <div className="blog-details">
        {isloading && <div> data is loading !!!</div>}
        {err && <div>{err}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <h3>written by: {blog.author}</h3>
                <div>
                    <p style={{textAlign: 'justify'}}>
                        {blog.body}
                    </p>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </article>
           
        )}

        </div>
     );
}
 
export default BlogDetails;