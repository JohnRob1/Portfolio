import { useEffect, useState } from 'react';

export { default as ffDash } from '../assets/FF_Dash.png';
export { default as ffProf } from '../assets/FF_Profile.png';
export { default as ffLoca } from '../assets/FF_Location.png';
export { default as ffSoca } from '../assets/FF_Social.png';
export { default as mediCond } from '../assets/medi_conditions.jpg';
export { default as mediPath } from '../assets/medi_graph.jpg';
export { default as mediQues } from '../assets/medi_question.jpg';
export { default as mediFeti } from '../assets/medi_confetti.jpg';
export { default as jComp } from '../assets/judgeme_compare.png';
export { default as jHome } from '../assets/judgeme_home.png';
export { default as jTaste } from '../assets/judgeme_music_taste.png';
export { default as p5Main } from '../assets/P5MainWindow.png';
export { default as lMain } from '../assets/lotTrackMain.png';
export { default as lFile } from '../assets/lotTrackFile.png';
export { default as lOut } from '../assets/lotTrackOut.png';
export { default as lGif } from '../assets/lotTrackGif.gif';
export { default as hWrestling } from '../assets/HAR_23_24_B_WR.jpg';
export { default as dannarPic } from '../assets/dannarPic.png';
export { default as fisherPic } from '../assets/fisherPic.png';
export { default as baAlex } from '../assets/baAlex.JPEG';
export { default as baFloat } from '../assets/baFloating.JPG';
export { default as bmExpress } from '../assets/BoilermakerExpress.JPG';
export { default as purdueCS } from '../assets/purdue_cs.png';
export function ScreenWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

