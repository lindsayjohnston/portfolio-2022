import { Link, Routes, Route } from 'react-router-dom';
import './Blog.css';
import { blogs } from '../../blogObject'

const Blog = () => {
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

    return (
        <div className="blog-page page-content">
            <h2>Blog</h2>
            {Object.keys(blogs).map((UUID, index) => {
                let sectionClass = "section-odd"
                if (index % 2 === 0) {
                    sectionClass = "section-even"
                }
                if (index === 0) {
                    sectionClass = "highlighted-blog"
                }

                return (

                    <Link to={`/blog/${UUID}`}>
                        <section className={sectionClass}>

                            <div className="text-area">
                                <h3>{blogs[UUID].title}</h3>
                                <p>{blogs[UUID].snippet}</p>
                            </div>
                            <img src={blogs[UUID].img} />
                        </section>
                    </Link>


                )
            })}
        </div>
    )
}

export default Blog;