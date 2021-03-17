import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const pgtitle = props.title
    const handleDelete = props.handleDelete
    return (  
       
        <div className="blog-list">
        
         <h2>{pgtitle}</h2>
            {blogs.map((blog)=>(
                
                <div className="blog-preview" key={blog.id}>
                <Link to={`blog/${blog.id}`}>
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>
                </Link>
                </div>

            ))}
            
        </div>
        
    );
}
 
export default BlogList;