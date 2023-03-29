import { Link } from 'react-router-dom';
import './BlogNew.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


const BlogNew = () => {
    // const blogs = {
    //     UUID1: {
    //         date: "1-1-2023",
    //         title: "Title 1",
    //         snippet: "Blah blah 1",
    //         img: "../media/work/south-texas-covid.png",
    //         highlight: true
    //     },
    //     UUID2: {
    //         date: "2-2-2023",
    //         title: "Title 2",
    //         snippet: "Blah blah 2",
    //         img: "../media/work/phony-famous-768x506.jpg",
    //         highlight: true
    //     },
    //     UUID3: {
    //         date: "3-3-3033",
    //         title: "Title 3",
    //         snippet: "Blah blah 3",
    //         img: "../media/work/phony-famous-768x506.jpg",
    //         highlight: true
    //     }
    // }

    //get blogs from server
    const baseURL = "https://mongodb-test-ziu4.onrender.com/posts"
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setBlogs(response.data)
        })
    }, [])

    return (
        <div className="blog-page page-content">
            <h2>Blog</h2>
            {blogs &&
                blogs.map((blogData, index) => {
                    let sectionClass = "section-odd"
                    if (index % 2 === 0) {
                        sectionClass = "section-even"
                    }
                    if (index === 0) {
                        sectionClass = "highlighted-blog"
                    }
                    return (
                        <Link to={`/blog/${blogData._id}`} key={blogData._id}>
                            <section className={sectionClass}>
                                <div className="text-area">
                                    <h3>{blogData.title}</h3>
                                    <p>{blogData.snippet}</p>
                                    <p><strong>{blogData.date}</strong></p>
                                </div>
                                <img alt={blogData.imgAlt} src={blogData.thumbnail} />
                            </section>
                        </Link>
                    )
                })}
            <div>
                <h3>More posts coming soon!</h3>
            </div>
        </div>
    )
}

export default BlogNew;