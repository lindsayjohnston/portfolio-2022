import './Tile.css';

const Tile = (props) =>{
    // PROPS:
    //title - string 
    return(
        <div className="tile">
            <div className="content">
                {props.children}
            </div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Tile;