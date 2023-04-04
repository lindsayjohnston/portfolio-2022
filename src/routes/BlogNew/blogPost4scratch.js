export const blogString4 =
   `<intro>In this tutorial, we will create a webpage with examples of a myriad of HTML elements 
paired with an explanation of their intended purpose. Not only will you develop some 
'muscle memory' for writing HTML, but you’ll also create a personalized library of 
HMTL examples to build upon and reference throughout your web dev career.</intro>
<prereqs>
   Visual Studio Code installed , Internet browser (Chrome - Safari - Firefox etc.),Internet Connection
</prereqs>
<steps>
   <step>
   {"stepTitle" : "STEP 1: CREATE AN HTML FILE IN VSCODE", "stepContent":
      "
      <p>
      If you need help setting up Visual Studio Code, check out the article <link>../blog-new/22222, here</link>.
      </p>
      "
   }
</step>
<step>
{"stepTitle": "STEP 2: FILL THE FILE WITH BOILERPLATE HTML",
"stepContent": "
         <p>
         If you need help creating a basic HTML FILE, check out the article <link>../blog-new/11111, here</link>.
         </p>
         <p>
         When all is said and done, you should see something like this in your IDE:
         </p>
         <img>html boilerplate, SRC</img>
         <p>
         Have some fun with the <strong><title> </strong> tag and feel free to leave the 
         <strong><body> </strong> tag blank for now. We’ll be replacing it momentarily.
         </p>
         <p>Open up this file in a browser to make sure that it’s loading correctly. (Click on the file in a file explorer and it should open up in a browser.) 
         Open the Dev Tools to inspect your elements as you go. Check out <link>#,this article</link> if you
         are unsure about working with browser Dev Tools.</p>
         <p>Your browser set up should look something like this:</p>
         <img>simple webpage, SRC</img>
"}
</step>
<step>
{
   "stepTitle": "STEP 3: ADD IN HEADER ELEMENTS WITH DESCRIPTIONS",
   "stepContent": "
      <p>Let’s add our first HTML element into the body.</p>
      <code>
...(newline)
<body>(newline)
   <h1>This is an H1 Element: It's used for top-level headings</h1>(newline)
</body>(newline)
...
      </code>
      <p>Save the file and refresh your browser. You should see something like this:</p>
      <img>h1 element image, SRC</img>
      <p>
      Notice how the font size and weight changed just by specifying a new type of element. 
      As you continue in your HTML 
      journey you will notice that some styles are automatically added to elements by the browser. 
      </p>
      <p>
      Add in <strong><h2> </strong> through <strong><h6> </strong> 
      elements to see how the browser handles those elements differently. 
      Your code might look like this:
      </p>
      <code>
...(newline)
<body>(newline)
   <h1>This is an H1 Element: It's used for top-level headings</h1>(newline)
   <h2>This is an H2 Element</h2>(newline)
   <h3>This is an H3 Element</h3>(newline)
   <h4>This is an H4 Element</h4>(newline)
   <h5>This is an H5 Element</h5>(newline)
   <h6>This is an H6 Element</h6>(newline)
</body>(newline)
...
            </code>
            <p>Check it out in the browser:</p>
            <img>header elements, SRC</img>
   <p>
   Check out the <a>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements, MDN web docs</a> on <strong><h1> </strong> through <strong><h6> </strong> 
   elements. 
   Add in any notes that you find interesting or memorable into your headings. 
   Make this your own! Here’s how mine looks:
   </p>
   <img>header elements with notes, SRC</img>
   "
}
</step>
<step>
{
   "stepTitle": "STEP 4: ADD IN SOME VISUAL CONTENT",
   "stepContent": "
      <p>
      Up to this point, everything has been extremely boring and you might be questioning your career as a web developer. 
      BUT WAIT! Let’s add in some snazzy visuals and get excited about the internet again.
      </p>
      <p>
      Google your favorite image, right click it and copy the link.
      </p>
      <img>image search of Beyonce, SRC</img>
      <p>Go to your IDE and add in the <strong><img> </strong> element. 
      This one is different than the others, so pay attention! </p>
<code>
...(newline)
<body>(newline)
   <h1>This is an H1 Element: It's used for top-level headings</h1>(newline)
   ...(newline)
   <p>...</p>(newline)
   ...(newline)
   <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/12FB/production/_126095840_gettyimages-1388259808.jpg'/>(newline)
</body>(newline)
...
</code>
<p>
The <strong><img> </strong> element is self-closing– notice that it doesn’t have a 
closing <strong></img> </strong> tag
like you might have come to expect from staring at header and paragraph elements. It also requires a “src” attribute in order to make anything show up. 
Add in the URL that you copied from your image search. Save and check it out in the browser…
</p>
<img>webpage with Beyonce, SRC</img>
<p>
If you did everything right, your image should be 
shining as bright as Beyonce on your wasteland of a black and white webpage.
</p>
   "
}
</step>
<step>
{
   "stepTitle": "STEP 5: ADD AN ATTRIBUTE TO THE IMG ELEMENT",
   "stepContent": "
      <p>Go to your <strong></img> </strong> element and add an 'alt' attribute 
      with a useful description like so:</p>
<code>
...(newline)
<body>(newline)
...(newline)
   <img(newline)
      alt='Beyonce looking great in a lime green background'(newline)
      src='https://ichef.bbci.co.uk/news/976/cpsprodpb/12FB/production/_126095840_gettyimages-1388259808.jpg'/>(newline)
 </body>(newline)
</code>
<p>
This step isn’t mandatory, but it is a best practice. It helps screen readers digest content (for non-sighted web users) 
and also helps boost the SEO of your webpages. More on that at <a>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img, MDN’s website</a>.
</p>
   "
}
</step>
<step>
{
   "stepTitle": "STEP 6: ADD IN MORE HTML ELEMENTS AD-NAUSEUM",
   "stepContent": "
      <p>
      Go to the <a>https://developer.mozilla.org/en-US/docs/Web/HTML/Element, MDN Docs on HTML Elements</a> for a full list. 
      Pick at least 3 more and add them to your webpage. The more you invest in personalizing these elements now, the deeper they will ingrain themselves in your brain. 
      Here are some examples I chose:</p>
<code>
...(newline)
<body>(newline)
...(newline)
   <div>This is a div: MDN says...</div>(newline)
   <ul>(newline)
      <li>This is an li within a ul: MDN says...</li>(newline)
      <li>This is another li within the same ul: MDN says...</li>(newline)
   </ul>(newline)
   <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'>(newline)
      This is an a element: MDN says...</a>(newline)
...(newline)
</body>(newline)
</code>
<p>
Check out all your elements in the browser and play around with them in the Dev Tools as well:
</p>
<img>inspecting with Dev Tools, SRC</img>
   "
}
</step>
</steps>

<link>../blog-new/22222, Next up... Set up an IDE</link>`