import './Tile.css';

const Tile = (props) =>{
    return(
        <div className="tile">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Tile;