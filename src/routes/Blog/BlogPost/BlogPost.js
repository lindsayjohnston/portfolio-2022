import React from "react";
import './BlogPost.css'
import { blogs } from "../../../blogObject";

export default function BlogPost (){
   let URL = window.location.href
   let UUID = URL.split("blog/")[1]
   

   return(
      <div className="blog-post-page">
         test
         <h2>{blogs[UUID].title}</h2>
         <img src={blogs[UUID].img}/>
      </div>
   )
}