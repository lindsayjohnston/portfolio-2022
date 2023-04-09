import React, { useState } from "react";
import StringToHTMLParser from "../BlogNew/StringToHTMLParser";
import './BlogEditor.css'

export default function BlogEditor(props) {
   //PROPS
   //setAuthenticatedUser 

   const [rawText, setRawText] = useState(null)
   const [savedRawTextArray, setSavedRawTextArray] = useState([]) //holds 3 last saves in state
   const [textFromMongoDB, setTextFromMongoDB] = useState("nothing from MongoDB")

   const getPostToPreview = async (e) => {
      e.preventDefault()
      const response = await fetch('https://mongodb-test-ziu4.onrender.com/posts/64232b3a0b28a3b95ca26e41')
         .then((response) => response.json())
         .then((data) => setTextFromMongoDB(data.content))
         .catch(error => console.log(error))
   }


   const makePost = async (e) => {
      e.preventDefault()
      const title = document.getElementById("title").value
      const blogSlug = document.getElementById("slug").value
      const snippet = document.getElementById("snippet").value
      const mainImg = document.getElementById("main-image").value
      const thumbnailImg = document.getElementById("thumbnail-image").value
      const imgAltText = document.getElementById("img-alt-text").value
      const content = document.getElementById("raw-blog-text").value


      await fetch(`https://mongodb-test-ziu4.onrender.com/posts`, {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ title, blogSlug, snippet, mainImg, thumbnailImg, imgAltText, content })
      }).then(resp => {
         resp.json().then(result => {
            if (result.error) {
               alert(result.error)
            } else {
               if (result.insertedId) {
                  alert("Success!")
               }
            }
         })
      }).catch(error => console.log(error));
   }


   const updatePreview = (e) => {
      //send textarea through parser
      e.preventDefault()
      const newRawText = document.getElementById("raw-blog-text").value
      setRawText(newRawText)
   }

   const handleSave = (e) => {
      e.preventDefault()
      const newSavedArray = [...savedRawTextArray]
      const newSavedString = document.getElementById("raw-blog-text").value
      newSavedArray.unshift(newSavedString)
      if (newSavedArray.length > 3) {
         newSavedArray.pop()
      }
      setSavedRawTextArray(newSavedArray)
   }

   const populateWithLastSaved = (e) => {
      e.preventDefault();
      document.getElementById("raw-blog-text").value = savedRawTextArray[0]
   }
   return (
      <div className="blog-editor">
         <div className="center">
            <button onClick={(e) => { e.preventDefault(); props.setAuthenticatedUser(false) }}>Click to un-authenticate</button>
         </div>
         <form onSubmit={makePost}>
            <div className="input-field">
               <label htmlFor="title">Title:</label>
               <input id="title" type="text"></input>
            </div>
            <div className="input-field">
               <label htmlFor="slug">Slug:</label>
               <input id="slug" type="text"></input>
            </div>
            <div className="input-field">
               <label htmlFor="snippet">Snippet:</label>
               <textarea id="snippet" type="text"></textarea>
            </div>
            <div className="input-field">
               {/* Eventually upload to S3 from here */}
               <label htmlFor="main-image">Choose Main Image URL:</label>
               <input id="main-image" type="text"></input>
            </div>
            <div className="input-field">
               <label htmlFor="thumbnail-image">Choose Thumbnail Image URL:</label>
               <input id="thumbnail-image" type="text"></input>
            </div>
            <div className="input-field">
               <label htmlFor="img-alt-text">Image Alt Text:</label>
               <input id="img-alt-text" type="text"></input>
            </div>

            <h3>Create Post:</h3>
            <div className="center">
               <button onClick={handleSave}>Save</button>
               <button onClick={populateWithLastSaved}>Use Last Saved</button>
            </div>

            <textarea id="raw-blog-text" onChange={updatePreview}></textarea>
            <div className="center">
               <button type="submit">Submit to MongoDB</button>
            </div>

         </form>

         <div className="preview-JSX-container">
            <h3>Preview:</h3>
            <StringToHTMLParser stringToParse={rawText} />
         </div>
      </div>
   )
}