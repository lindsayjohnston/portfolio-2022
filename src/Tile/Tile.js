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
                </div>
                <h2>{props.title}</h2>
            </Link>
        </div>

    )
}

export default Tile;