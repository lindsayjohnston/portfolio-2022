const thing = `
<intro>
It’s time to delve into the most visually-stimulating side of web development: CSS. 
CSS stands for <a>https://developer.mozilla.org/en-US/docs/Web/CSS, Cascading Style Sheets</a> – emphasis on STYLE – and it’s where we write the instructions for an internet browser to beautify a webpage. Hold on tight – color, texture and pizzazz incoming!
</intro>

<prereqs>
Visual Studio Code IDE,
Web browser
</prereqs>

<steps>
   <step>
   {"stepTitle" : "STEP 1: OPEN YOUR PROJECT FOLDER IN YOUR IDE", "stepContent":
      "
      <p>
If you followed along with the <link>../blog/set-up-ide, Set up an IDE</link>article, 
you should have ended up with a folder containing one HTML file. Open up that folder inside your IDE:
      </p>
<img>Open Folder Gif, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/open-folder.gif</img>
      "
   }
</step>
<step>
   {"stepTitle" : "STEP 2: POPULATE THE HTML FILE", "stepContent":
"
<p>
Copy and paste the <a> https://gist.github.com/lindsayjohnston/f3b21aa79fd72b9a7b81f5b3881b6ec9, boilerplate HTML</a>  from the <link>../blog/create-your-first-webpage, 
Create Your First Webpage Article</link> into this file, replacing what you had before.
</p>
<p>

In your computer’s file explorer go to your project folder and double click on the ‘index.html’ file. 
</p>
<img>
Gif of opening file, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/open-html-file.gif 
</img>
<p>You should see this when it opens up in the browser.</p>
<img>
Baby's First Website,  https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/CreateYourFirstWebpage/webpage-image.png
</img>
"}
</step>
<step>
{"stepTitle": "STEP 3: ADD A CSS FILE TO THE FOLDER", "stepContent":"
<p>Right click in the File Explorer pane in VSCode and click ‘New File.’ Name this file ‘styles.css’. </p>
<img>Create css file GIF, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/create-css-file.gif </img>

"
}
</step>
<step>{
"stepTitle":"STEP 4: ADD A CSS RULE FOR THE BODY TAG", "stepContent":"
<p>Add this code snippet to the CSS file and save. This tells the the browser to paint all the text in the <strong><body> </strong> red. </p>
<code>
/*CSS FILE*/(newline)(newline)
body{(newline)
   color: red(newline)
}
</code>
"
}
</step>
<step>{
"stepTitle":"STEP 5: LINK THE CSS FILE TO THE HTML FILE", "stepContent":"
<p>
If you refresh your browser at this moment, you shouldn’t see anything change because we haven’t told the browser where to look for the style sheet. To do that, we add the following <strong><link> </strong> element the <strong><head> </strong> element in out HTML file:
</p>
<code>
//HTML FILE (newline)(newline)
...(newline)
<head>(newline)
   <link rel=\"stylesheet\" href=\"styles.css\">
</head>(newline)
...

</code>
<p>
Check out <a>https://gist.github.com/lindsayjohnston/0078cd8e980652d52001290c25dec1e0, this gist</a> on GitHub. I'll try to include code snippets so you can check your work in context.
</p>
<p>
Save everything and refresh your browser. You should see the text change to a lovely shade of red:
</p>
<img>black to red text gif, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/black-to-red-text.gif</img>
<important>
Every time I add a new CSS file and link it to my HTML, I try to add a quick CSS snippet and a visually offensive color. Making small changes to the code that are easy to evaluate in the browser makes debugging (the art of finding your mistakes) easier.
</important>
"
}
</step>
<step>{
"stepTitle": "STEP 6: ADD MORE COLORS", "stepContent":"
<p>Now let’s add a few more HTML elements to our page and a CSS rule for each of them as we go. If you need a refresher on HTML elements check out <link>../blog/html-exploration,HTML Reference Post</link>.</p>
<p>Most Websites will have a title, so I’m going to add an <strong><h1> </strong> element inside the <strong><body> </strong> element.</p>
<code>
//HTML FILE (newline)(newline)
<body>(newline)
   <h1>Lindsay's Great Website</h1>(newline)
   Write whatever you like here. (newline)   This is your first website: make it count!(newline)
</body>
</code>
<p>Then I will go to the CSS file and add a rule for the h1 element:</p>
<code>
/*CSS FILE*/(newline)(newline)
body{(newline)
   color: red;(newline)
}(newline)
(newline)
h1{(newline)
   color: purple;(newline)
}
</code>
<p>
Hit save and refresh your browser. Mine looks like this:
</p>
<img>H1 color,https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/h1-color.png</img>
<important>
CSS has lots of specificity rules. In this case, the <h1> tag is inside the <body> tag so it would inherit all the <body> styles (red text). When we tell the browser an even more specific rule (like paint the <h1> elements purple) it will let that rule take precedence.
</important>
<p>
Let’s put the current <strong><body> </strong> text into an <strong><p> </strong> element and assign it a different color. 
</p>
<code>
//HTML FILE(newline)(newline)
<body>(newline)
   <h1>Lindsay's Great Website</h1>(newline)
   <p>Write whatever you like here.(newline)
   This is your first website: make it count!</p>(newline)
</body>
</code>
<code>
/*CSS FILE*/(newline)(newline)
body{(newline)
   color: red(newline)
}(newline)
(newline)
h1{(newline)
   color: purple;(newline)
}(newline)
(newline)
p{(newline)
   color: green;(newline)
}(newline)

</code>
<p>Mine looks like this now:</p>
<img>green p element, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/p-green-color.png</img>
"

}
</step>
<step>
{"stepTitle":"STEP 7: CHANGE THE FONT STYLE", "stepContent":"
<p>Because our h1 and p rules cover all of the elements in the <strong><body> </strong> tag and are more specific than the body rule, we don’t see the red text anymore. Let’s change that CSS rule to something else that will affect ALL of the elements within the body tag:</p>
<code>
/*CSS FILE*/(newline)(newline)
body{(newline)
   font-family: sans-serif;(newline)
}

</code>
<p>Save and refresh your browser. Breathe easy knowing that we don’t have to look at Times New Roman anymore…
</p>
<img>Sans Serif font, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/to-sans-serif.gif </img>
"
}</step>
<step>{"stepTitle": "STEP 8: ADD AN IMG ELEMENT AND STYLE IT", "stepContent":"
<p>Most websites have a picture of some sort, so I’m going to include an <strong><img> </strong> element to my HTML…</p>
<code>
//HTML FILE (newline)(newline)
<body>(newline)
   <h1>Lindsay's Great Website</h1>(newline)
   <p>Write whatever you like here.(newline) 
   This is your first website: make it count!</p>(newline)
   <img src=\"https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg\"/>(newline)
</body>
</code>
<p>When I look in the browser, this element is WAY bigger than I’d like.</p>
<img>Image too big, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/img-too-big.png</img>
<p>So I’m going to add a CSS rule to force it to only be 400 px wide:</p>
<code>
/*CSS FILE*/(newline)(newline)
...(newline)(newline)
img{(newline)
   width: 400px;(newline)
}

</code>
<p>Refresh the browser and…</p>
<img>Image smaller,https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/img-400px.png </img>
<p>Yuss! I can see the entire cute puppy. Great success!</p>
<p>Now let’s give that image some trendy rounded borders:</p>
<code>
/*CSS FILE*/(newline)(newline)
...(newline)(newline)
img{(newline)
   width: 400px;(newline)
   border-radius: 20px;(newline)
}

</code>
<p>Wow we’re going to be making icons for Apple in no time:</p>
<img>rounded borders,https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/rounded-borders.png
</img>
"
}
</step>
<step>{"stepTitle":"STEP 9: ADD A LINK TO ANOTHER WEBSITE", "stepContent":"
<p>Most websites will have a link to some sort of communication tool, so I’m going to add one as well:</p>
<code>
//HTML FILE (newline)(newline)
<body>(newline)
   <h1>Lindsay's Great Website</h1>(newline)
      ...(newline)
   <a href=\"facebook.com\">Find me on Facebook!</a>(newline)
</body>
</code>
<p>I decided to override the browser-link-blue color and bold the font of the link so it really stands out:</p>
<code>
/*CSS FILE*/(newline)(newline)
a{(newline)
   color: orangered;(newline)
   font-weight: bold;(newline)
}

</code>
<p>I'm also going to use the display rule to force that link onto it's own line like so:</p>
<code>
/*CSS FILE*/(newline)(newline)
a{(newline)
   ...(newline)
   display: block(newline)
}

</code>
<p>Look at your amazing new website in the browser!</p>
<img>Link added, https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/AddCssToSimpleWebsite/added-linked-aligned.png</img>
"
}
</step>

<p>If you want to check your work, go to the <a>https://github.com/lindsayjohnston/simple-css-project, respository here</a> to see the full project.</p>
</steps>
`