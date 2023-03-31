import React from "react";
import { Link } from "react-router-dom";

export default function CreateAWebpageBlogPost() {
   //EVERY POST NEEDS 'blog-post-content' class
   return (
      <div className="blog-post-content">
         <p className="intro">This is a quick and dirty guide to making you a web developer in the next 9 minutes.
            Set your timer, and let’s get nerdy. </p>
         <div className="prerequisites">
            <strong>PREREQUISITES:</strong>
            <ul>
               <li>
                  A computer
               </li>
               <li>
                  Internet browser (Chrome, Safari, Firefox etc.)
               </li>
               <li>
                  Some sort of text editor (Notepad comes standard on Windows and TextEdit on Mac)
               </li>
            </ul>

         </div>
         <div className="steps">
            <div className="step odd-step">
               <h4>STEP 1: MAKE AN HTML FILE</h4>
               <div className="step-body">
                  <p>
                     Open a text editor like Notepad on Windows or TextEdit on Mac. If you already have an
                     <a href="https://www.codecademy.com/article/what-is-an-ide"> IDE </a>set up
                     (like VisualStudio Code) you can use that as well.
                  </p>
                  <div className="important-info">
                     <div className="icon-container">
                        <img alt="info icon" className="icon" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/circle-info-solid.svg" />
                     </div>
                     <p>
                        Don’t use something like Word or Pages, the “whitespace” on a fancy document editor will be full of invisible,
                        extra code that may mess up your simple website.
                     </p>
                  </div>
                  <p>
                     Copy the snippet below into the text editor:
                  </p>
                  <pre>
                     <code>
                        {`
<!DOCTYPE html> 
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Baby’s First Website</title>
</head>
<body>
   Write whatever you like here. This is your first website: make it count!
</body>
</html>
                  `}
                     </code>
                  </pre>
                  {/* <a href="#">ADD A GIST HERE</a> */}
                  <div className="important-info">
                     <div className="icon-container">
                        <img alt="info icon" className="icon" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/circle-info-solid.svg" />
                     </div>
                     <p>
                        Even as a seasoned web developer, I still copy and paste this “markdown” snippet every
                        time I create a webpage from scratch.
                        Reserve your memory for mom’s birthday and Google everything else.
                     </p>
                  </div>
                  <p>
                     Feel free to edit the text in the <strong>&lt;body&gt;</strong> and <strong>&lt;title&gt;</strong> tags to whatever your heart desires. “Hello world” is a classic.
                  </p>
                  <p>
                     Save this as an “.html” file.
                  </p>
                  <div className="img-container">
                     <img alt="save to html example"
                        src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/CreateYourFirstWebpage/save-to-html.png" />
                  </div>
                  <div className="important-info">
                     <div className="icon-container">
                        <img className="icon"
                           alt="info icon"
                           src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/circle-info-solid.svg" />
                     </div>
                     <p>
                        “Index.html” is the super boring name that most websites use for their HTML foundation.
                        You could call it “web-borgs-r-us.html” if you like.
                     </p>
                  </div>

               </div>
            </div>
            <div className="step even-step">
               <h4>STEP 2: OPEN YOUR FIRST WEBPAGE</h4>
               <div className="step-body">
                  <p>
                     Click on the file you just saved. Most computers are smart enough to try to open “.html” files in a web browser.
                     You should see your first-ever, hand-rolled webpage.
                  </p>
                  <div className="img-container">
                     <img alt="simple webpage"
                        src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/CreateYourFirstWebpage/webpage-image.png" />
                  </div>
                  <p>
                     Notice how the text in the <strong>&lt;title&gt;</strong> tag corresponds with the text that shows up in the browser tab and how the text in the
                     <strong> &lt;body&gt;</strong> tag shows up on the page. Play around with these. Have a little fun!
                  </p>
                  <Link to="../blog/set-up-ide"> Next up... Set up an IDE</Link>
               </div>
            </div>
         </div>
      </div>
   )
}