import React, { useEffect, useState } from "react";
import BlockCreator from "./BlockCreator";
import { type } from "@testing-library/user-event/dist/type";

export default function StringToHTMLParser(props) {

   //PROPS
   //stringToParse = string

   const validTagTypes = {
      "intro": {
         //list of stuff here
      },
      "prereqs": {},
      "steps": {},
      "step": {},
      "p": {},
      "a": {},
      "important": {},
      "code": {},
      "img": {},
      "strong": {},
      "link":{}

   }

   const setErrorMessages = (messageArray) => {
      let errorMessage = ""
      messageArray.map(message => {
         errorMessage += message
      })

      const errorMessageArea = document.getElementById("error-message")
      if (errorMessageArea) {
         errorMessageArea.innerHTML = errorMessage
      }
   }



   const handleChunks = () => {
      const blockArray = []
      let errorMessages = []


      let string = props.stringToParse.replaceAll("\n", "")

      while (string.length > -1) {
         string = string.trim() //remove whitespace from beginning and end

         if (!string.includes("<") || !string.includes(">")) {
            blockArray.push({ type: "string", content: string })
            setErrorMessages(errorMessages)
            return ({ blockArray: blockArray })
         }

         let startTagOpenIndex = string.indexOf("<")
         const prefixString = string.substring(0, startTagOpenIndex)

         //DEAL WITH LEADING CHARACTERS
         if (prefixString.length > 0) {
            //take that off, send as string
            blockArray.push({ type: "string", content: prefixString })
            string = string.slice(prefixString.length)
            startTagOpenIndex = string.indexOf("<") //reset opening tag index
         }

         const startTagCloseIndex = string.indexOf(">")
         const typeOfTag = string.substring(startTagOpenIndex + 1, startTagCloseIndex)
         const openTag = "<" + typeOfTag + ">"

         //CHECK TAG TYPE
         if (!validTagTypes[typeOfTag]) {
            blockArray.push({ type: "string", content: string })
            errorMessages.push("Invalid tag type.")
            setErrorMessages(errorMessages)
            return ({ blockArray: blockArray })
         }


         const endTag = "</" + typeOfTag + ">"
         let endTagIndex = string.indexOf(endTag)

         //CHECK TAG IS CLOSED
         if (endTagIndex < 0) {
            blockArray.push({ type: "string", content: string })
            errorMessages.push("Tag needs to be closed.")
            setErrorMessages(errorMessages)
            return ({ blockArray: blockArray })
         } else {
            //WE HAVE AT LEAST ONE POTENTIAL TAG
            endTagIndex = string.indexOf(endTag) + endTag.length
            //parse that part
            let currentChunk = string.substring(0, endTagIndex)
            const currentChunkLength = currentChunk.length
            // remove tags

            let content = currentChunk.replace(openTag, "").replace(endTag, "")

            blockArray.push({ type: typeOfTag, content: content })

            //remove from original string
            string = string.slice(currentChunkLength)

            // return { blockArray: blockArray, errorMessage: "Didn't loop" }
            if (string === "") {
               errorMessages.push("No error")
               setErrorMessages(errorMessages)
               return { blockArray: blockArray }
            }
         }
      }
   }

   if (!props.stringToParse) {
      return ("Nothing to preview")
   } else {

      let dataForBlocks = handleChunks()
      // debugger
      return (
         <>
            {dataForBlocks.blockArray &&
               dataForBlocks.blockArray.map((blockInfo, i) => {
                  return <BlockCreator blockInfo={blockInfo} key={i} />
               })
            }

         </>
      )

   }



}




