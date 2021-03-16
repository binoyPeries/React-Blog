const BlogList = (props) => {
    const blogs = props.blogs;
    const pgtitle = props.title
    const handleDelete = props.handleDelete
    return (  
       
        <div className="blog-list">
         <h2>{pgtitle}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>
            
                </div>

            ))}
        </div>
    );
}
 
export default BlogList;