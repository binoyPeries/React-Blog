import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {

    const [title, setTitle]= useState('');
    const [body, setbody]= useState('');
    const [author, setAuthor]= useState('Binoy');
    const [isloading, setIsloading] = useState(false);
    const his = useHistory();

    const handleSubmit =(e)=>{
        setIsloading(true);
        e.preventDefault();
        const blog ={title,body,author}
        fetch('http://localhost:8000/blogs',{
        
            method: 'POST',
            headers: {"content-type":"application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsloading(false);
            console.log("Added");
            // to redirect to home page check history hook
            his.push('/');

        }).catch((e)=>{
            console.log(e.message);
        });


    };

    return ( 
    <div className="create-blog">
        <h2>Add new Blog</h2>
        {isloading && (
            <div> Adding the blog!!</div>
        )}
        <form onSubmit={handleSubmit} hidden={isloading}>
            <label >Blog Title:</label>
            <input type="text" 
            required
            value={title}
            onChange= {(e)=>setTitle(e.target.value)}
             />

            <label htmlFor="">Body:</label>
            <textarea  
            cols="20" 
            rows="10"
             required
             value ={body}
             onChange= {(e)=>setbody(e.target.value)}

            ></textarea>


            <label htmlFor="">Blog Author:</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="Binoy">Binoy</option>
                <option value="John">John</option>
                <option value="Yurantha">Yurantha</option>
            </select>
            <br/>
            <br/>

            <button>Add Blog</button>
        
           
           
        </form>        
    </div>
        
     );
}
 
export default CreateBlog;