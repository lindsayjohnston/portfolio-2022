import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StringToHTMLParser from "../../BlogNew/StringToHTMLParser";


export default function BlogPostPreview(props) {
   //PROPS
   //setAuthenticated - function
   const params = useParams()
   const [slug, setSlug] = useState(params.blogSlug)
   const [postData, setPostData] = useState({ _id: null })
   const [blogPostError, setBlogPostError] = useState(false)
   const [date, setDate] = useState("")

   useEffect(() => {
      setSlug(params.blogSlug)
   }, [params])

   useEffect(() => {
      axios.get("https://mongodb-test-ziu4.onrender.com/posts/" + slug).then((response) => {
         if (response.data === "Not found") {
            setBlogPostError(true)
         } else {
            let humanReadableDate = new Date(response.data.date).toDateString()
            setDate(humanReadableDate)
            setPostData(response.data)
         }
      }).catch(() => setBlogPostError(true))
   }, [slug])

   return (
      <div className="blog-post-page">
         <h2>THIS IS A PREVIEW</h2>
         <div className="center">
            <button onClick={(e) => { e.preventDefault(); props.setAuthenticatedUser(false) }}>Click to un-authenticate</button>
         </div>
         {blogPostError &&
            <div>Oops! Couldn't find that post.</div>
         }
         {
            postData._id && !blogPostError &&
            <>
               {!postData.approved && <p className="error-text">This post has not been approved!</p>}
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