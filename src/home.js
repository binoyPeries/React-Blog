import {useState , useEffect} from 'react';
import BlogList from './blogList';
const Home = () => {
    // const [name,setName]=useState('binoy')
    // first para is the variable name
    //second para is the func that can be used to change the variable

    const [blogs, setBlogs] = useState(null);
    const [isloading, setISloading] = useState(true);
    const [err, setErr] = useState(null);

    //dummy func to mimic dependencies
    // const [name,setName] = useState('mario');

    //this we run everytime the page gets re rendered
    //use effect dependencies allows\ us to define when to run the useEffect //second parameter
    useEffect(()=>{
        fetch('http://localhost:8000/blog')
        .then(res =>{
            if(res.ok){
                return res.json()
            }
            else{
                throw Error('Could not fetch data!!!')
            }
            
        })
        .then( data=>{
            setBlogs(data);      
            setISloading(false) ; 
            setErr(null);
        })
        .catch((e)=>{
            setBlogs(null);
            setErr(e.message);
            setISloading(false);
        })
        console.log('use effect');

    },[]);
    //whatever inside the array, if these states changes the useEffect re runs
    const handleDelete =(id)=>{
        const tempblog = blogs.filter((b)=>b.id !==id);
        setBlogs(tempblog);
    }
    
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