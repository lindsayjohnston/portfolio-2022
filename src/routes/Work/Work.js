import './Work.css';
import Tile from '../../Tile/Tile.js';

let testArray = Array(12).fill(0);

const Work = (props) =>{
    return(
        <div className="work-page page-content">
            {testArray.map(element => <Tile key={element}/>)}
        </div>
    )
    
}

export default Work;