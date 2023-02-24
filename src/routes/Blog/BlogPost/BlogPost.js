import React from "react";
import './BlogPost.css'
import { blogs } from '../blogObject'

export default function BlogPost() {
   let URL = window.location.href
   let UUID = URL.split("blog/")[1]


   return (
      <div className="blog-post-page">
         <h2 className="blog-title">{blogs[UUID].title}</h2>
         <img className="blog-image" src={blogs[UUID].img} />
         {blogs[UUID].content}
      </div>
   )
}