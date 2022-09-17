import  { useEffect, useState } from 'react'

function UseFetch(url) {

    const[res, setData] = useState(null)
    const [loading, setLoading]=useState(true)
    const [Error, setError]=useState(false)

    useEffect(()=>{

        async function fetchData(){
            
            try{
                const response = await fetch(url)
                const item = await response.json()
                setData(item)
                setLoading(false)
            }

            catch(error){
                console.log(error)
                setError(true)
                setLoading(false)
            }

          
        }

        fetchData()

    },[url])

    return {res, Error, loading}
  
}

export default UseFetch