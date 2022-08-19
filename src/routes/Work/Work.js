import './Work.css';
import Tile from '../../Tile/Tile.js';

let testArray = Array(12).fill(0);

const workMedia = {
    creative: {
        title: "Creative",
        type: "img",
        src: "../../media/work/sad-mode-album-cover_768x506.webp"
    },
    creative2: {
        title: "Creative2",
        type: "img",
        src: "../../media/work/sad-mode-album-cover_768x506.webp"
    },
    // web:{
    //     title: "Web Development"
    // },
    // music:{
    //     title: "Music"
    // },
    // corporate:{
    //     title: "Corporate"
    // },
    // apparel:{
    //     title: "Apparel"
    // },
    
}

const Work = (props) => {
    return (
        <div className="work-page page-content">
            {Object.keys(workMedia).map(key => {
         
                return (
                    <Tile key={key}>
                    {/* picture is a much newer addition to the language. Its main goal is to let us load different sources depending on resolution or support for a given image format. */}
                        <picture>
                            <source srcSet='../media/work/sad-mode-album-cover-768x506.webp' type="image/webp"/>
                            <source srcSet='../media/work/sad-mode-album-cover-768x506.jpg' type="image/jpg"/>
                            <img src= '../media/work/sad-mode-album-cover-768x506.jpg'></img>
                        </picture>
                    </Tile>
                )
            }

            )}
        </div>
    )

}

export default Work;