import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewsComponent = (props) => {

  return (
    <div className="max-w-5xl sticky mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-3xl font-bold mb-6">Latest News</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        props.articles.map((articles,id) => {
          return articles.urlToImage && <div key={id} className="bg-white flex flex-col justify-between h-auto shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-44 object-cover p-1" src={articles.urlToImage} alt={articles.title} />
                {/* <div className="p-4"> */}
                    <h2 className="text-l font-semibold my-2 p-2 ">{articles.title}</h2>
                    <p className="text-gray-600 my-2 p-2">{articles.author}</p>
                    <Link
                        to={articles.url}
                        className="inline-block bg-blue-600 m-2 text-white px-4 py-2 text-center rounded-md hover:bg-blue-700 transition"
                    >
                        Read More
                    </Link>
                </div>
            // </div>
})
}
    </div>




   



</div>
  )
}

export default NewsComponent
