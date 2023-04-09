import { Link } from 'react-router-dom';
import './BlogNew.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { blogArrayNew } from './blogArrayNew';


const BlogNew = () => {
    //get blogs from server
    const baseURL = "https://mongodb-test-ziu4.onrender.com/posts"
    const [blogs, setBlogs] = useState(null)
    const [blogsError, setBlogsError] = useState(false)

    //This is what we will use when everything is squared away
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setBlogs(response.data)
        }).catch(()=>setBlogsError(true))
    }, [])

    return (
        <div className="blog-page page-content">
            <h2>Blog</h2>
            {blogs && !blogsError &&
                <>
                    {blogs.map((blogData, index) => {
                        if(!blogData.approved){
                            console.log("Post not tagged for approval.")
                            return null
                        }
                        let sectionClass = "section-odd"
                        if (index % 2 === 0) {
                            sectionClass = "section-even"
                        }
                        if (index === 0) {
                            sectionClass = "highlighted-blog"
                        }
                        return (
                            <Link to={`/blog/${blogData.blogSlug}`} key={blogData._id}>
                                <section className={sectionClass}>
                                    <div className="text-area">
                                        <h3>{blogData.title}</h3>
                                        <p>{blogData.snippet}</p>
                                        <p><strong>{new Date(blogData.date).toDateString()}</strong></p>
                                    </div>
                                    <img alt={blogData.imgAlt} src={blogData.thumbnailImg} />
                                </section>
                            </Link>
                        )
                    })}
                    <div>
                        <h3>More posts coming soon!</h3>
                    </div>
                </>
            }
            {
                blogsError &&
                <p>Shoot! Something went wrong. Please try refreshing.</p>
            }

        </div>
    )
}

export default BlogNew;