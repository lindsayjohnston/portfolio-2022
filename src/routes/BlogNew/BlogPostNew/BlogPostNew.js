import React, { useEffect, useState } from "react";
import './BlogPostNew.css'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogPost(props) {
   const params = useParams()
   const baseURL = "https://mongodb-test-ziu4.onrender.com/posts/" + params.blogId

   const [postData, setPostData] = useState({ _id: null })
   const [blogPostError, setBlogPostError] = useState(false)

   useEffect(() => {
      axios.get(baseURL).then((response) => {
         setPostData(response.data)
      }).catch(setBlogPostError(true))
   }, [])

   return (
      <div className="blog-post-page">
         {
            postData._id &&
            <>
               <h2 className="blog-title">{postData.title}</h2>
               <img alt={postData.imgAlt} className="blog-image"
                  src={postData.img} />
               <p><strong>{postData.date}</strong></p>
               {postData.content}
            </>

         }

      </div>
   )
}