export const blogString3 =
   `<intro>If you are an experiential learner (like me) there’s almost 
   nothing as exciting as tweaking a template and seeing what happens. 
   In this tutorial we’ll learn how to pop the hood of a webpage and 
   edit it with Chrome Dev Tools, 
   opening the door to infinite real-time tweaking and observation-based learning.</intro>
<important>
Most modern browsers have their own version of 'Dev Tools' 
but we’re going to focus on Chrome’s for this article.
</important>
<prereqs>
   Chrome internet browser,Internet Connection
</prereqs>
<steps>
   <step>
   {"stepTitle" : "STEP 1: OPEN AN EXISTING WEBPAGE IN CHROME", "stepContent":
      "
      <p>
      I decided to open <a>https://nytimes.com/,https://nytimes.com/</a> in my browser to have a little editing fun.
      </p>
      "
   }
</step>
<step>
{"stepTitle": "STEP 2: RIGHT CLICK AND HIT 'INSPECT'",
"stepContent": "
         <p>
         Right click anywhere on the webpage and click 'Inspect' 
         in the dropdown menu that appears:
         </p>
         <img>menu with 'Inspect', https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/menu-with-inspect.png</img>
"}
</step>
<step>
{"stepTitle": "STEP 3: EXPLORE THE DEV TOOLS PANE",
"stepContent": "
         <p>
         If you correctly executed Steps 1 and 2 
         you should see the Dev Tools panel pop up:
         </p>
         <img>dev tools panel, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/dev-tools-panel.png</img>
         <important>
         If your Dev Tools panel is docked somewhere other than the right-hand side of the screen you can change the view by clicking the 3 dots in the 
         top right of the panel and choosing the 'Dock side' option you prefer.
         </important>
         <img>dock side icon, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/dev-tools-docker.png</img>
"}
</step>
<step>
{"stepTitle": "STEP 4: INSPECT A CERTAIN ELEMENT",
"stepContent": "
         <p>
         Right click on one of the headlines on the page and click 'Inspect' again 
         (like we did in step 2 but this time aiming for a headline). 
         You should see that element highlight in the Dev Tools Elements pane:
         </p>
         <img>Dev Tools pane with header highlighted, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/h3-highlighted.png</img>
"}
</step>
<step>
{"stepTitle": "STEP 5: CHANGE THE ELEMENT",
"stepContent": "
         <p>
         Double click on the text in the element that is highlighted in the 
         Elements pane and it should highlight even more specifically like so…
         </p>
         <img>h3 text highlighted, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/h3-text-highlighted.png</img>
         <p>
         Think of a really clever headline that you’d like to see on the front 
         page of the New York Times and type that into the text area instead. 
         </p>
         <img>h3 text changed in dev tools pane, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/edit-h3-text.png </img>
         <p>
         The headline should change to whatever you wrote. 
         </p>
         <img>h3 text changed in browser, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/IntroToDevTools/changed-headline.png</img>
"}
</step>
<step>
{"stepTitle": "STEP 6: SCREENSHOT IT AND SEND IT TO YOUR FRIENDS",
"stepContent": "
         <p>
         This used to be way cooler before we were desensitized by deep-fakes. 
         Your mom might be easier to fool. Have fun changing all of the text on the New York Times front page to be about 
         YOU and learning a bit about HTML in the process.
         </p>

"}
</step>
<link>../blog/html-exploration, Next up...HTML Exploration Project</link>
</steps>
`