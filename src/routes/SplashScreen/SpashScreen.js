import { useState } from 'react';
import './SplashScreen.css';

const SplashScreen = (props) =>{
    const [screenShown, setScreenShown] = useState(true);

    //if content not loaded return(props.children)
    if(screenShown){
    return(
        <div className='splash-screen'>
        <div className='splash-screen-content flex-column'>
            <h1>lindsay k.</h1>
            <h1>johnston</h1>
            <button onClick={()=>setScreenShown(false)}>hide</button>
        </div>
        </div>
    )
    } else{
        return null;
    }
}

export default SplashScreen;