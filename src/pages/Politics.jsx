import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchContext from '../context/SearchContext';

const Politics = () => {
    
  let ctx = useContext(SearchContext)
  console.log(ctx.search)


    const [articles , setArticles] =useState([]);
    console.log(articles)

  async function getAllData (){
      let res = await axios.get(`https://newsapi.org/v2/everything?q=${ctx.search?ctx.search:'politics'}&apiKey=6f116a996b3742f79f798f03a6cba629`)
    
     //let data = await res.json();
     //console.log(res)
     //console.log(res.data)
    console.log(res.data.articles);
    setArticles(res.data.articles)
     
     
  }

  useEffect(()=>{
      getAllData()
    },[ctx.search])

  return (
    
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((articles,id) => {
         return articles.urlToImage && <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={articles.urlToImage} alt={articles.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{articles.title}</h2>
              <p className="text-gray-600 mb-4">{articles.description}</p>
              <Link
                 to={articles.url}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>}
        )}
      </div>
    </div>
    
  )
}

export default Politics
