import {useState} from 'react';
const Home = () => {
    // const [name,setName]=useState('binoy')
    // first para is the variable name
    //second para is the func that can be used to change the variable

    const [blogs, setBlogs] = useState([
        {title:'React vs Angular', author:"binoy peries" , body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', id:1},
        {title:'Node.js', author:"John peries" , body: ' Id obcaecati eum, aut repellat, ducimus sapiente error eveniet velit .', id:2},
        {title:'Flutter', author:"Yurantha peries" , body: ' in consectetur doloribus rem iste aperiam accusantium,aliquam perferendis hic exercitationem cupiditate..', id:3}

    ]);
    
    // const handleClick=()=>{
    //     setName('peries')
    // }
    return (  
        <div className="home">
   
            {/* <h2>Welcome to Homepage</h2> */}

            {/* <button onClick= {()=>handleClick("same")}> Click me</button> */}
            {/* <p>{name}</p>
            <button onClick= {handleClick}> Click me</button> */}

            {/* key (Id) property is a must in react */}

            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>


                </div>


            ))}

        






        </div>
    );
}
 
export default Home;