const BlogList = (props) => {
    const blogs = props.blogs;
    console.log(props);
    return (  
        <div className="blog-list">
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