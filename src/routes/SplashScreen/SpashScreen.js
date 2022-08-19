import { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = (props) => {
    const [screenShown, setScreenShown] = useState(true);
    const fadeOut = () =>{
        //do a thing
        const title = document.getElementById('splash-title-div');
        title.classList.remove('fade-in');
        title.classList.add('fade-out');
    }
    const fadeIn = () =>{
        //do a thing
        const title = document.getElementById('splash-title-div');
        title.classList.remove('fade-out');
        title.classList.add('fade-in');
    }

    //if content not loaded return(props.children)
    if (screenShown) {
        return (
            <div className='splash-screen'>
                <div className='splash-screen-content flex-column'>
                    <div id='splash-title-div'className='splash-title flex-column fade-in'>
                        <h1>lindsay k.</h1>
                        <h1>johnston</h1>
                    </div>
                    <button onClick={() => fadeOut()}>Fade Out</button>
                    <button onClick={() => fadeIn()}>Fade In</button>
                    <button onClick={() => setScreenShown(false)}>hide</button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default SplashScreen;