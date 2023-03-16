import React from "react";
import './BlogPost.css'
import { blogs } from '../blogObject'

export default function BlogPost(props) {   
   let URL = window.location.href
   let UUID = URL.split("blog/")[1]
   if(UUID.endsWith("/")){
      //Trailing "/" was messing with UUID and images loading
      UUID = UUID.replace("/", "")
      window.location.href = "/blog/" + UUID
   }

   return (
      <div className="blog-post-page">
         <h2 className="blog-title">{blogs[UUID].title}</h2>
         <img alt={blogs[UUID].imgAlt} className="blog-image"
            src={blogs[UUID].img} />
         <p><strong>{blogs[UUID].date}</strong></p>
         {blogs[UUID].content}
      </div>
   )
}