import React from "react"
import CreateAWebpageBlogPost from "./BlogContent/CreateAWebpage"

export const blogs = {
   "create-your-first-webpage": {
      date: "1-1-2023",
      title: "Create Your First Webpage",
      snippet: "Go from 0 to Web Developer in 9 minutes or your money back!",
      img: "../media/blog/CreateAWebpage/create-a-webpage.png",
      thumbnail: "../media/blog/CreateAWebpage/create-a-webpage365x243.png",
      highlight: true,
      content: <CreateAWebpageBlogPost />,
      date: "March 13, 2023"
   },
   // UUID2: {
   //    date: "2-2-2023",
   //    title: "Title 2",
   //    snippet: "Blah blah 2",
   //    img: "../media/work/phony-famous-768x506.jpg",
   //    highlight: true
   // },
   // UUID3: {
   //    date: "3-3-3033",
   //    title: "Title 3",
   //    snippet: "Blah blah 3",
   //    img: "../media/work/phony-famous-768x506.jpg",
   //    highlight: true
   // }
}
