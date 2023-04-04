import React, { useEffect, useState } from "react";
import './BlogPostNew.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import StringToHTMLParser from "../StringToHTMLParser";
import {blogString2} from '../blogPost2scratch'
import { blogArrayNew } from "../blogArrayNew";


export default function BlogPost(props) {
   const params = useParams()
   const baseURL = "https://mongodb-test-ziu4.onrender.com/posts/" + params.blogId

   // const [postData, setPostData] = useState({ _id: null })
   const postData = blogArrayNew.find(element => element._id === params.blogId )
   const [blogPostError, setBlogPostError] = useState(false)
   // const [date, setDate] = useState("")
   const date = postData.date


   //This will be set up eventually
   // useEffect(() => {
   //    axios.get(baseURL).then((response) => {
   //       setPostData(response.data)
   //       let humanReadableDate = new Date(response.data.date).toDateString()
   //       setDate(humanReadableDate)
   //    }).catch(setBlogPostError(true))
   // }, [])

   return (
      <div className="blog-post-page">

         {
            postData._id &&
            <>
               <h2 className="blog-title">{postData.title}</h2>
               <img alt={postData.imgAltText} className="blog-image"
                  src={postData.mainImage} />
               <p><strong>{date}</strong></p>
               <div className="blog-post-content">
                  <StringToHTMLParser stringToParse={postData.content} />
               </div>

            </>

         }

      </div>
   )
}