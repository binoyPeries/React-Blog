//this is a custom hook
import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isloading, setISloading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(()=>{
        const abortconst = new AbortController();
        //second args is to abort the fetch if the hook is removed
        fetch(url,{signal:abortconst.signal})
        .then(res =>{
            if(res.ok){
                return res.json()
            }
            else{
                throw Error('Could not fetch data!!!')
            }
            
        })
        .then( data=>{
            setData(data);      
            setISloading(false) ; 
            setErr(null);
        })
        .catch((e)=>{
            if(e.name === 'AbortError'){
                  console.log(e.message);  
            }
            else{
                setData(null);
                setErr(e.message);
                setISloading(false);
            }
           
        })
        console.log('use effect');

        //this is to umounnt the hook properly or else
        //  if move from onr page to another quickly the fetch will still be going on
        return ()=> {
            abortconst.abort();
        }

    },[url]);

    return {data,isloading,err};

}

export default useFetch;