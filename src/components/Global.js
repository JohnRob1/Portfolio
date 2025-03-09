import { useEffect, useState } from 'react';

const Images = {
    ffDash: require('../assets/FF_Dash.png'),
    ffProf: require('../assets/FF_Profile.png'),
    ffLoca: require('../assets/FF_Location.png'),
    ffSoca: require('../assets/FF_Social.png'),
    mediCond: require('../assets/medi_conditions.jpg'),
    mediPath: require('../assets/medi_graph.jpg'),
    mediQues: require('../assets/medi_question.jpg'),
    mediFeti: require('../assets/medi_confetti.jpg'),
    jComp: require('../assets/judgeme_compare.png'),
    jHome: require('../assets/judgeme_home.png'),
    jTaste: require('../assets/judgeme_music_taste.png'),
    p5Main: require('../assets/P5MainWindow.png'),
    lMain: require('../assets/lotTrackMain.png'),
    lFile: require('../assets/lotTrackFile.png'),
    lOut: require('../assets/lotTrackOut.png'),
    lGif: require('../assets/lotTrackGif.gif'),
    hWrestling: require('../assets/HAR_23_24_B_WR.jpg'),
    dannarPic: require('../assets/dannarPic.jpg'),
    fisherPic: require('../assets/fisherPic.png'),
    baAlex: require('../assets/baAlex.JPEG'),
    baFloat: require('../assets/baFloating.JPG'),
    bmExpress: require('../assets/BoilermakerExpress.JPG'),
    purdueCS: require('../assets/purdue_cs.png'),
    dannarMPS: require('../assets/DANNAR-MPS.jpg'),
    wxRebel: require('../assets/wxRebel.jpg'),
    wxDashboard: require('../assets/wxDashboard.png'),
};

export default Images;

export function ScreenWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export function formatContent(content) {
    const pattern = />>(.+?)<<|>>(.*?$)/gs;
    let matches = {};
    let index = 0;
    let match;

    while ((match = pattern.exec(content)) !== null) {
        const text = (match[1] !== undefined ? match[1] : match[2]).split('\n\n');
        if (!text) break;

        matches = {
            ...matches,
            [text[0]]: {
                key: index++,
                date: text[1],
                mainDesc: text[4].replace(/\n(?!-)/g, ' '),
                moreDesc: text
                    .splice(5)
                    .map(desc => desc.replace(/\n(?!-)/g, ' '))
                    .join('\n\n'),
            },
        };

        if (text[2] !== 'no pics')
            Object.assign(matches[text[0]], { pics: text[2].split(', ').map(img => Images[img]) });

        if (text[3] !== 'no links')
            Object.assign(matches[text[0]], {
                links: text[3].split('\n').map(link => link.split(', ')),
            });
    }

    return matches;
}
