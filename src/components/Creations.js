import Tiles from './Tiles.js';
import * as Images from './Global.js';
import global from '../styles/Global.module.css';

export default function Creations() {
    const content = {
        'This Portfolio Website': {
            key: 'portfolio',
            date: 'May 2024',
            mainDesc: 'Personal Project to showcase my passion and expertise in software engineering, ' +
                'while presenting personality as whole.\n' +
                'Technologies: React, Framer Motion, Javascript, HTML, CSS\n' +
                'Note: Click these tiles for more information!',
            moreDesc: 'I started coding this website with a new design during my Spring 2024 semester at Purdue. ' +
                'With my internship starting in June, I\'ve had this month of May to finish up, and really enjoyed the process. ' +
                'This was built using React in JavaScript from create-react-app, ' +
                'of which only useState, useEffect, and useRef for the mouse effect and accordion animations were used. ' +
                'React components was just the step up from HTML/JS I needed for better extensibility and cleaner code, with ' +
                'vanilla CSS remaining surprisingly capable and clean. ',
        },
        'FinanceFriend': {
            key: 'financefriend',
            date: 'Fall 2023',
            mainDesc: 'Senior Software Engineer Semester Project\n' +
                'Technologies: Flutter Web Framework (Dart), Firebase, GoogleMaps API',
            moreDesc: 'My and team and I created a fully-featured personal finance application, ' +
                'with the goal of learning new technologies while developing a feature-rich application.' +
                'My contributions to this project were the below features: \n' +
                '-Account creation\n-Profile management\n-Account dashboard\n-Expense input by location\n' +
                '-Database management\n-Social media posts\n-Spending goal comments\n',
            pics: [Images.ffDash, Images.ffProf, Images.ffLoca, Images.ffSoca],
            links: [
                ["Github Repo", "https://github.com/JohnRob1/FinanceFriend.git"],
                ["Project Charter", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS%20407%20Project%20Charter.pdf"],
                ["Design Doc", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS407%20Design%20Doc.pdf"],
                ["Sprint 1 Plan", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS407%20Sprint%201%20Planning%20Doc.pdf"],
                ["Sprint 1 Retrospective", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS407%20Sprint%201%20Retrospective.pdf"],
                ["Sprint 2 Plan", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS407%20Sprint%202%20Planning%20Doc.pdf"],
                ["Sprint 2 Retrospective", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS%20407%20Sprint%202%20Retrospective.pdf"],
                ["Sprint 3 Plan", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS407%20Sprint%203%20Planning%20Doc.pdf"],
                ["Sprint 3 Retrospective", "https://github.com/JohnRob1/FinanceFriend/blob/main/docs/CS%20407%20Sprint%203%20Retrospective.pdf"],
            ]
        },
        'MediLingo': {
            key: 'medilingo',
            date: 'October 2023',
            mainDesc: 'PittChallenge 2023 Hackathon entry\n' +
                'Technologies: TypeScript, React, Next.js, Vite, MongoDB Atlas',
            moreDesc: 'My team and I\'s goal for this website was to educate people about common medical ' +
                'conditions. My contributions to this project are the graph component ' +
                'that represents game progress and multiple React components that ' +
                'my teammates were able to use in making the game. We won the ' +
                'best use of MongoDB Atlas and the Health Literacy category.',
            pics: [Images.mediCond, Images.mediPath, Images.mediQues, Images.mediFeti],
            links: [
                ["Github Repo", "https://github.com/JohnRob1/MediLingo"],
                ["DevPost", "https://devpost.com/software/medilingo"]
            ]
        },
        'JudgeMe': {
            key: 'judgeme',
            date: 'Fall 2022',
            mainDesc: 'Software Engineering Class Semester Project\n' +
                'Technologies: Django Framework (Python), TailwindCSS, HTML, Javascript, SQLite',
            moreDesc: 'For my Software Engineering Class Project at Purdue, my team and I built ' +
                'a web application using the Django framework (Python) and TailwindCSS. ' +
                'Using the Spotify API, users get feedback about their music taste and recommendations ' +
                'for new music. Where we got the name JudgeMe, however, is the comparison feature. ' +
                'We added social media features to allow users to compare their music taste with their ' +
                'friends. My contributions to this project involved creating Django templates for my teammates ' +
                'such as the playlist UI. The rest of my work was solely focused on the comparison features. ' +
                'Using research from Spotify on the link between music taste and personality, I developed an ' +
                'algorithm that uses your the genres of your favorite songs to tell you a little about what ' +
                'your music taste says about you!',
            pics: [Images.jComp, Images.jHome, Images.jTaste],
            links: [
                ["Github Repo", "https://github.com/JohnRob1/JudgeMe"],
                ["Design Doc", "https://github.com/JohnRob1/JudgeMe/blob/main/docs/Design_Document.pdf"],
                ["Backlog", "https://github.com/JohnRob1/JudgeMe/blob/main/docs/Project_Backlog.pdf"],
                ["Charter", "https://github.com/JohnRob1/JudgeMe/blob/main/docs/Project_Charter.pdf"]
            ]
        },
        'Lot Tracking Application in Java': {
            key: 'lot-tracker',
            date: 'April 2022',
            mainDesc: 'Personal Lot Number Tracking Project\nTechnologies: Java/JavaFX, Apache API',
            moreDesc: 'Using the experience I got in Java from my Object Oriented Programming class, ' +
                'I wanted to solve a problem I was facing at my part-time position at Fisher Packing. ' +
                'We were writing all of the lot numbers of ingredients by hand, ' +
                'so I sped up the process with lot-tracker! This program reads the lot numbers from the ' +
                'recipe template that was used at Fisher Packing, and automatically fills it out from lot ' +
                'numbers that were used previously. No need to rewrite!',
            pics: [Images.lMain, Images.lFile, Images.lOut, Images.lGif],
            links: [["Github Repo", "https://github.com/JohnRob1/lot-tracker"]]
        },
        'Messaging Application': {
            key: 'cs180project',
            date: 'Fall 2020',
            mainDesc: 'Object Oriented Programming Final Project\nTechnologies: Java/JavaFX',
            moreDesc: 'For this project, my team and I developed a full-stack Java application ' +
                'that allowed a user to send messages in groups. My contributions to this ' +
                'project were primarily the edit and delete functionalities of the messages, ' +
                'which was great training for client-server development.',
            pics: [Images.p5Main],
            links: [["Github Repo", "https://github.com/JohnRob1/Project5"]]
        }
    };

    return (
        <>
            <div className={global.title} id="creations">
                CREATIONS
            </div>
            <Tiles tiles={content} />
        </>
    );
}

