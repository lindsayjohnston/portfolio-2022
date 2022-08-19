import { useState } from 'react';
import './SplashScreen.css';

const SplashScreen = (props) =>{
    const [screenShown, setScreenShown] = useState(true);

    //if content not loaded return(props.children)
    if(screenShown){
    return(
        <div className='splash-screen flex-column'>
            this will be splashy screen
            <button onClick={()=>setScreenShown(false)}>hide</button>
        </div>
    )
    } else{
        return null;
    }
}

export default SplashScreen;