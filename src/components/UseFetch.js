import React, {useState, useEffect} from "react";

export const useFetch = (url) => {

    const [result, setResult]=useState({data:null})
    useEffect( () => {
        getData(url)
    },[url])

    async function getData(url){
        try{
        setResult({data:null})
        const response=await fetch(url)
        const data=await response.json()
        setResult({data})
        } catch(e){
            console.log(e)
        }
    }

    return result
}
