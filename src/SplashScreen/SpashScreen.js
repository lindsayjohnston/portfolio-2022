import { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = (props) => {
    const [screenShown, setScreenShown] = useState(true);

    const closeScreen = ()=>{
        //start fading out title
        const title = document.getElementById('splash-title-div');
        title.classList.remove('fade-in');
        title.classList.add('fade-out');
        //start fading out screen .5s later
        const screen = document.getElementById('splash-screen');
        setTimeout(()=>screen.classList.add('fade-out'), 500);
        //when everything's faded, remove the screen from dom
        setTimeout(()=>setScreenShown(false), 3000)
    }

    if (screenShown) {
        return (
            <div id="splash-screen" className='splash-screen' onClick={closeScreen}>
                <div className='splash-screen-content flex-column'>
                    <div id='splash-title-div'className='splash-title flex-column fade-in'>
                        <h1>lindsay k.</h1>
                        <h1>johnston</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default SplashScreen;