import React from "react"
import CreateAWebpageBlogPost from "./BlogContent/CreateAWebpage"
import SetUpIDEBlogPost from "./BlogContent/SetUpIDE"

export const blogs = {
   "create-your-first-webpage": {
      title: "Create Your First Webpage",
      snippet: "Go from 0 to Web Developer in 9 minutes or your money back!",
      img: "https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/CreateYourFirstWebpage/create-a-webpage.png",
      imgAlt: "computer",
      thumbnail: "https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/CreateYourFirstWebpage/create-a-webpage365x243.png",
      highlight: true,
      content: <CreateAWebpageBlogPost />,
      date: "March 13, 2023"
   },
   "set-up-ide": {
      title: "Set up an IDE",
      snippet: "Code like a pro with your very own Integrated Development Environment.",
      img: "https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/vs-code-welcome.png",
      imgAlt: "VS Code",
      thumbnail: "https://portfolio-2023.s3.us-east-2.amazonaws.com/BlogPostMedia/SetUpVSCode/vs-code-welcome365x222.jpg",
      highlight: false,
      content: <SetUpIDEBlogPost />,
      date: "March 30, 2023"
   },
   // UUID3: {
   //    date: "3-3-3033",
   //    title: "Title 3",
   //    snippet: "Blah blah 3",
   //    img: "../media/work/phony-famous-768x506.jpg",
   //    highlight: true
   // }
}
