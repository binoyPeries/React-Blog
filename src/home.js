import BlogList from './blogList';
import useFetch from './useFetch';
const Home = () => {

    /**useState */

    // const [name,setName]=useState('binoy')
    // first para is the variable name
    //second para is the func that can be used to change the variable

    /**USeEffect */
    //useEffect runs everytime the page gets re rendered
    //use effect dependencies allows\ us to define when to run the useEffect //second parameter
    //whatever inside the array, if these states changes the useEffect re runs


    // const handleDelete =(id)=>{
    //     const tempblog = blogs.filter((b)=>b.id !==id);
    //     setBlogs(tempblog);
    // }
    
    // const handleClick=()=>{
    //     setName('peries')
    // }


    const {data:blogs,err,isloading}=useFetch('http://localhost:8000/blogs');
    //this is to get the data and call it blogs
    return (  
        <div className="home">
            {/* <h2>Welcome to Homepage</h2> */}

            {/* <button onClick= {()=>handleClick("same")}> Click me</button> */}
            {/* <p>{name}</p>
            <button onClick= {handleClick}> Click me</button> */}

            {/* key (Id) property is a must in react */}
            {/* pass data from parent to child we use prop */}

            {err && <div>{err} </div> }
            {isloading && <div>Data is Loading.... </div>}
            {blogs && <BlogList blogs={blogs}  title ="All Blogs" />}
         
            <br/>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author =='binoy')}  title ="Binoy's Blogs"/> */}

    

        </div>
    );
}
 
export default Home;