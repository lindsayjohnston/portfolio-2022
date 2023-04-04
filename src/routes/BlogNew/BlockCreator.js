import React from "react";
import StringToHTMLParser from "./StringToHTMLParser";
import { Link } from "react-router-dom";

export default function BlockCreator(props) {
   switch (props.blockInfo.type) {
      case "intro":
         return <p className="intro"><StringToHTMLParser stringToParse={props.blockInfo.content} /></p>
      case "prereqs":
         let items = props.blockInfo.content.split(",")
         return (
            <div className="prerequisites">
               <strong>PREREQUISITES:</strong>
               <ul>
                  {
                     items.map((item, i) => {
                        return <li key={i}>{item}</li>
                     })
                  }
               </ul>
            </div>
         )
      case "steps":
         return (
            <div className="steps">
               <StringToHTMLParser stringToParse={props.blockInfo.content} />
            </div>
         )
      case "step":
         const createStepObject = () => {

            if (props.blockInfo.content !== undefined) {
               try {
                  return JSON.parse(props.blockInfo.content)
               } catch (e) {
                  console.log(e)
                  return { stepTitle: "step error", "stepContent": "step error" }
               }
            }
         }

         const stepObject = createStepObject()
         if (!stepObject) {
            return "ERROR IN STEP"
         }
         return (
            <div className="step">
               <h4>{stepObject.stepTitle}</h4>
               <div className="step-body">
                  <StringToHTMLParser stringToParse={stepObject.stepContent} />
               </div>
            </div>
         )
      case "p":
         return (<p><StringToHTMLParser stringToParse={props.blockInfo.content} /></p>)
      case "a":
         let aQualities = props.blockInfo.content.split(",")
         return (
            <a target = "_blank" rel="noreferrer" href={aQualities[0]}>{aQualities[1]}</a>
         )
      case "important":
         return (
            <div className="important-info">
               <div className="icon-container">
                  <img alt="info icon" className="icon" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/circle-info-solid.svg" />
               </div>
               <p>
                  {props.blockInfo.content}
               </p>
            </div>
         )
      case "code":
         const newLineReplacedString = props.blockInfo.content.replaceAll("(newline)", "\n")
         return (
            <pre>
               <code>{newLineReplacedString}</code>
            </pre>
         )
      case "img":
         let imgQualities = props.blockInfo.content.split(",")
         return (
            <div className="img-container">
               <img alt={imgQualities[0]} src={imgQualities[1]} />
            </div>
         )

      case "strong":
         return (<strong>{props.blockInfo.content}</strong>)

      case "string":

         return props.blockInfo.content
      case "link":
         let linkQualities = props.blockInfo.content.split(",")
         return  <Link to={linkQualities[0]}>{linkQualities[1]}</Link>

      default:
         return "error in BlockCreator"
   }
}


{/* <intro>
         this is an intro
      </intro>
      <prereqs>
         one, two, three
      </prereqs>
      <steps>
         <step>
            {"stepTitle": "Title 1", "stepContent": "<p>This is content</p>"}
         </step>
         <step>
            {"stepTitle": "Title 2", "stepContent": "<p>This is <strong>strong </strong> content</p>"}
         </step>
         <step>
            {"stepTitle": "Title 3", "stepContent": "<p>This is <a>#, Link </a> content</p>"}
         </step>
      <a>{"href":"#". "label": "test"}</a>
      <important>THIS IS IMPORTANT</important>
<code>
<!DOCTYPE html> 
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Baby’s First Website</title>
</head>
<body>
Write whatever you like here. This is your first website: make it count!!
</body>
</html>
</code> 
<img>{"src": "https://pyxis.nymag.com/v1/imgs/2c8/c8d/6eb151365547d1eee0bb8f5cb0f7bc332c-06-beyonce.rsquare.w700.jpg", "alt":"This is alt text"}</img>
      </steps> */}
