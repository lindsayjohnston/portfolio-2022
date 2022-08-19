import './Work.css';
import Tile from '../../Tile/Tile.js';

let testArray = Array(12).fill(0);

const workImgs = {
    image: {
        title: "blah"
    }
}

const Work = (props) => {
    return (
        <div className="work-page page-content">
            {Object.keys(workImgs).map(key => {
         
                return (
                    <Tile key={key}>
                        {workImgs[key].title}
                    </Tile>

                )
            }

            )}
        </div>
    )

}

export default Work;