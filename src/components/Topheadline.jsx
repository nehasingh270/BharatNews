import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Topheadline = () => {
 
    const [articles , setArticles] =useState([]);
    console.log(articles)

  async function getAllData (){
    try {
      let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6f116a996b3742f79f798f03a6cba629')
    
     //let data = await res.json();
     console.log(res)
     //console.log(data)
     console.log(res.data.articles);
     setArticles(res.data.articles)
    } catch (error) {
      console.log(error.message)
}
     
  }

  useEffect(()=>{
      getAllData()
    },[])



  return (
    <div >
      
      { articles.map((articles,id) => {
          return articles.urlToImage && <Link to={articles.url} key={id} className="bg-purple-400 flex flex-col justify-between border-spacing-1 h-auto shadow-md border overflow-hidden">
                <img className="w-full h-32 object-cover p-1" src={articles.urlToImage} alt={articles.title} />
                {/* <div className="p-4"> */}
                    <h2 className="text-l font-bold p-2 mb-2">{articles.content}</h2> 
                    <a
                        href="#"
                        className="inline-block bg-blue-600 m-2 text-white px-4 py-2 text-center rounded-md hover:bg-blue-700 transition"
                    >
                        Read More
                    </a>
                </Link>
            // </div>
})


}  
    </div>
  )
}

export default Topheadline
