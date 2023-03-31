import React from "react";

export default function SetUpIDEBlogPost() {
   //EVERY POST NEEDS 'blog-post-content' class
   return (
      <div className="blog-post-content">
         <p class="intro">In the <a target="_blank" rel="noreferrer" href="https://www.lindsaykjohnston.com/blog/create-your-first-webpage"> Create the
            Simplest Webpage Possible article</a>,
            we created a webpage using the text editor that came with our computer.
            Today, we’ll become full-fledged computer programmers by setting up an
            <a target="_blank" rel="noreferrer" href="https://www.codecademy.com/article/what-is-an-ide"> Integrated Development Environment</a>,
            also known as an “IDE.”</p>
         <div class="important-info"><div class="icon-container">
            <img alt="info icon" class="icon" src="../media/icons/circle-info-solid.svg" />
         </div>
            <p>Programmers LOVE using acronyms almost as much as they love poor communication.
               If you forget what IDE means, flip all the gatekeepers the bird,
               and feel free to call your IDE “the place where I write code.”</p>
         </div>
         <div class="prerequisites">
            <strong>PREREQUISITES:</strong>
            <ul>
               <li>A computer</li>
               <li>Internet browser </li>
            </ul></div>
         <div class="steps">
            <div class="step">
               <h4>STEP 1: GOOGLE VISUAL STUDIO CODE</h4>
               <div class="step-body">
                  <p>…or go directly to <a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/"> https://code.visualstudio.com/</a>.
                  </p>
                  <div class="img-container">
                     <img alt="VSCode Homepage" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/vs-code-homepage.png" />
                  </div><div class="important-info">
                     <div class="icon-container">
                        <img alt="info icon" class="icon" src="../media/icons/circle-info-solid.svg" />
                     </div>
                     <p>Don’t forget the 'Code' part in Visual Studio Code.
                        'Visual Studio' is more for C++ and .NET developers.
                        If you are seeing purple, you’ve gone the wrong way…</p>
                  </div>
                  <div class="img-container">
                     <img alt="VSCode Options" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/download-vs-code.png" />
                  </div>
               </div>
            </div>
            <div class="step">
               <h4>STEP 2: DOWNLOAD THE FREE SOFTWARE</h4>
               <div class="step-body">
                  <p>Ignore the 'Linux'  and 'Insiders' downloads unless you are way smarter than me.
                     Choose the 'Stable' Mac or Windows download  in accordance with your
                     devotion to Steve Jobs.</p>
                  <div class="img-container">
                     <img src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/download-for-windows.png" alt="VSCode Download Options" />
                  </div>
               </div></div>
            <div class="step">
               <h4>STEP 3: OPEN VISUAL STUDIO CODE</h4>
               <div class="step-body">
                  <p>After the software downloads, open it up and start poking
                     around!</p>
                  <div class="img-container">
                     <img alt="VSCode Welcome Page" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/vs-code-welcome.png" />
                  </div></div></div>
            <div class="step">
               <h4>STEP 4: CREATE A FOLDER FOR YOUR FIRST WEBSITE PROJECT</h4>
               <div class="step-body">
                  <p>Create a new folder on the desktop (or anywhere you like) and drag it into your open VSCode IDE.</p>
                  <div class="img-container">
                     <img alt="GIF of dragging folder to VSCode" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/drag-folder.gif" /></div></div>
            </div>
            <div class="step">
               <h4>STEP 5: CREATE AN HTML FILE INSIDE THAT FOLDER</h4>
               <div class="step-body">
                  <p>Right-click on the File Explorer window that should have appeared and click 'New File'</p>
                  <div class="img-container">
                     <img alt="New File in menu" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/vs-code-menu.png" /></div>
                  <div class="important-info"><div class="icon-container">
                     <img alt="info icon" class="icon" src="../media/icons/circle-info-solid.svg" /></div>
                     <p>If you don’t see the File Explorer window or you lose it,
                        you can click on this icon in the upper-left corner of the screen to find it again:
                     </p>
                  </div>
                  <div class="img-container">
                     <img alt="New File icon" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/file-explorer-icon.png" />
                  </div>
                  <p>Create a file called 'index.html' and add some boilerplate HTML
                     <a target="_blank" rel="noreferrer" href="#"> LINK TO GIST</a>to it.</p>
                  <div class="img-container"><img alt="HTML file" src="https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/new-file.png" /></div>
                  <p>Double check that your new file is in the folder you created on the desktop.</p>
               </div></div></div>


      </div>
   )
}