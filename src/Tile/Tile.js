import './Tile.css';
import { Link } from "react-router-dom";

const Tile = (props) => {
    // PROPS:
    //title - string 
    //link - string - "/work/music"
    return (
        <div className="tile">
            <Link to={props.link}>
                <div className="content">
                    {props.children}
                    <h2>{props.title}</h2>
                </div>
                
            </Link>

        </div>

    )
}

export default Tile;