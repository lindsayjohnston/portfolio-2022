import React, { useEffect, useState } from "react";
import './BlogPostNew.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import StringToHTMLParser from "../StringToHTMLParser";

export default function BlogPost(props) {
   const params = useParams()
   const [slug, setSlug] = useState(params.blogSlug)
   const [postData, setPostData] = useState({ _id: null })
   const [blogPostError, setBlogPostError] = useState(false)
   const [date, setDate] = useState("")

   useEffect(()=>{
      setSlug(params.blogSlug)
   }, [params] )

   useEffect(() => {
      axios.get("https://mongodb-test-ziu4.onrender.com/posts/" + slug).then((response) => {
         if (!response.data.approved) {
            setBlogPostError(true)
         } else {
            let humanReadableDate = new Date(response.data.date).toDateString()
            setDate(humanReadableDate)
            setPostData(response.data)
         }
      }).catch(()=>setBlogPostError(true))
   }, [slug])

   return (
      <div className="blog-post-page">
         { blogPostError &&
            <div>Oops! Couldn't find that post.</div>
         }
         {
            postData._id && !blogPostError &&
            <>
               <h2 className="blog-title">{postData.title}</h2>
               <img alt={postData.imgAltText} className="blog-image"
                  src={postData.mainImg} />
               <p><strong>{date}</strong></p>
               <div className="blog-post-content">
                  <StringToHTMLParser stringToParse={postData.content} />
               </div>
            </>

         }

      </div>
   )
}