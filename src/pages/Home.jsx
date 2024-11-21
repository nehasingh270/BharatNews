import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import NewsComponent from '../components/NewsComponent';
import Topheadline from '../components/Topheadline';
import SearchContext from '../context/SearchContext';

const Home = () => {
   let ctx = useContext(SearchContext)
   console.log(ctx.search)
     
    const [articles , setArticles] =useState([]);
      console.log(articles)

    async function getAllData (){
      
        let res = await axios.get(`https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'world'}&apiKey=6f116a996b3742f79f798f03a6cba629`)
      
       
       console.log(res)
       //console.log(data)
       console.log(res.data.articles);
       setArticles(res.data.articles)
      
       
    }

    useEffect(()=>{
        getAllData()
      },[ctx.search])
  return (
    <div className='px-5 grid grid-cols-12 gap-5'>
      
        <div className='col-span-9'>
        <NewsComponent articles={articles}/>
        </div>
        <div className='bg-whi mt-11 col-span-3 md:w-auto w-[300px] sm:block hidden relative overflow-hidden h-2/4'>
        <h1 className="text-xl  bg-black text-white w-full p-3 text-center font-bold mb-6 absolute top-0 left-0 z-10">Highligths</h1>
        <div className='topHeadlines absolute h-[100%]'>
            <Topheadline/>
        </div>
        </div>
    </div>
      
     
    


    
  )
}

export default Home
