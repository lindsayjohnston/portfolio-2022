import React from "react";

export default function CreateAWebpageBlogPost() {
   //EVERY POST NEEDS 'blog-post-content' class
   return (
      <div className="blog-post-content">
         <p className="intro">This is a quick and dirty guide to making you a web developer in the next 9 minutes.
            Set your timer, and let’s get nerdy. </p>
         <div className="prerequisites">
            <p>
               <strong>PREREQUISITES (most computers come with these already installed):</strong>
               <ul>
                  <li>
                     A computer
                  </li>
                  <li>
                     Internet browser (Chrome, Safari, Firefox etc)
                  </li>
                  <li>
                     Some sort of text editor (Notepad comes standard on Windows and TextEdit on Mac)
                  </li>
               </ul>
            </p>
         </div>
         <div className="steps">
            <div className="step">
               <h4>STEP 1: MAKE AN HTML FILE</h4>
               <p>
                  Open a text editor like Notepad on Windows or TextEdit on Mac. If you already have an
                  <a href="https://www.codecademy.com/article/what-is-an-ide">IDE</a> set up
                  (like VisualStudio Code) you can use that as well.
               </p>
               <p className="important-info">
                  Don’t use something like Word or Pages, the “whitespace” on a fancy document editor will be full of invisible,
                  extra code that may mess up your simple website.
               </p>
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
               <a href="#">ADD A GIST HERE</a>
               <p className="important-info">
                  Even as a seasoned web developer, I still copy and paste this “markdown” snippet every
                  time I create a webpage from scratch.
                  Reserve your memory for mom’s birthday and Google everything else.
               </p>
               <p>
                  Feel free to edit the text in the &lt;body&gt; and &lt;title&gt; tags to whatever your heart desires. “Hello world” is a classic.
               </p>
               <p>
                  Save this as an “.html” file.
               </p>
               <img src="../media/blog/CreateAWebpage/save-to-html.png" />
               <p className="important-info">
                  “Index.html” is the super boring name that most websites use for their HTML foundation.
                  You could call it “web-borgs-r-us.html” if you like.
               </p>
            </div>
            <div className="step">
               <h4>STEP 2: OPEN YOUR FIRST WEBPAGE</h4>
               <p>
                  Click on the file you just saved. Most computers are smart enough to try to open “.html” files in a web browser.
                  You should see your first-ever, hand-rolled webpage.
               </p>
               <img src="../media/blog/CreateAWebpage/webpage-image.png" />
            </div>
            <p>
               Notice how the text in the &lt;title&gt; tag corresponds with the text that shows up in the browser tab and how the text in the
                  &lt;body&gt; tag shows up on the page. Play around with these. Have a little fun!
                  </p>

               </div>

         </div>
         )
}