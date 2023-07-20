import {useState, useEffect} from "react";

export const UseFetch = (url) => {

    const [result, setResult]=useState({loading:true, data:null})

    useEffect(() => {
        getData(url)
    },[url])

    async function getData(url){
        try{
        setResult({loading:true, data:null})
            const response = await fetch(url)
            const data = await response.json()
        setResult({loading: false, data})
        } 
        catch(e){
            console.log(e)
        }
    }

    return result
}

export default UseFetch;
