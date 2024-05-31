import Tiles from './Tiles.js';
import global from '../styles/Global.module.css';
import ffDash from '../assets/FF_Dash.png';
import ffProf from '../assets/FF_Profile.png';
import ffLoca from '../assets/FF_Location.png';
import ffSoca from '../assets/FF_Social.png';
import ffChart from '../assets/CS 407 Project Charter.pdf';
import ffPlan1 from '../assets/CS407 Sprint 1 Planning Doc.pdf';
import ffPlan2 from '../assets/CS407 Sprint 2 Planning Doc.pdf';
import ffPlan3 from '../assets/CS407 Sprint 3 Planning Doc.pdf';
import ffRetro1 from '../assets/CS407 Sprint 1 Retrospective.pdf';
import ffRetro2 from '../assets/CS 407 Sprint 2 Retrospective.pdf';
import ffRetro3 from '../assets/CS 407 Sprint 3 Retrospective.pdf';
import mediCond from '../assets/medi_conditions.jpg';
import mediPath from '../assets/medi_graph.jpg';
import mediQues from '../assets/medi_question.jpg';
import mediFeti from '../assets/medi_confetti.jpg';

export default function Creations() {
    const content = {
        'FinanceFriend': {
            key: 'financefriend',
            date: 'Fall 2023',
            desc: 'For Senior Software Engineering Project at Purdue, my team and I built a budget ' +
                'application using the Flutter Web framework (in the Dart programming language) and Firebase. ' +
                'My contributions to this project were the below features: \n' +
                '-Account creation\n-Profile management\n-Account dashboard\n-Input spending by location\n' +
                '-Database management\n-Social media posts\n-Spending goal comments\n',
            pics: [ffDash, ffProf, ffLoca, ffSoca],
            links: [
                ["Github Repo", "https://github.com/JohnRob1/FinanceFriend.git"],
                ["Project Charter", ffChart],
                ["Sprint 1 Plan", ffPlan1],
                ["Sprint 1 Retrospective", ffRetro1],
                ["Sprint 2 Plan", ffPlan2],
                ["Sprint 2 Retrospective", ffRetro2],
                ["Sprint 3 Plan", ffPlan3],
                ["Sprint 3 Retrospective", ffRetro3],
            ]
        },
        'MediLingo': {
            key: 'medilingo',
            date: 'October 2023',
            desc: 'My Project at the PittChallenge Hackathon, where my team and I ' +
                'developed a website using MongoDB, Typescript, Next.js, Node.js, Vite, and Clerk.' +
                'Our goal for this website was to educate people about common medical ' +
                'conditions. My contributions to this project are the graph component ' +
                'that represents game progress and I made multiple React components that ' +
                'my teammates were able to use in making the game components. We won the ' +
                'best use of MongoDB Athlas and the Health Literacy category.',
            pics: [mediCond, mediPath, mediQues, mediFeti],
            links: [
                ["Github Repo", "https://github.com/JohnRob1/MediLingo"],
                ["DevPost", "https://devpost.com/software/medilingo"]
            ]
        },
        'JudgeMe': {
            key: 'judgeme',
            date: 'Fall 2022',
            desc: 'For my Software Engineering Class Project at Purdue, my team and I built ' +
                'a web application using the Django framework (Python) and TailwindCSS.',
            links: [["Github Repo", "https://github.com/JohnRob1/JudgeMe"]]
        },
        'Messaging Application': {
            key: 'cs180project',
            date: 'Fall 2020',
            desc: 'Final Project in my Object Oriented Programming class at Purdue',
            links: [["Github Repo", "https://github.com/JohnRob1/Project5"]]
        },
        'Lot Tracking Application in Java': {
            key: 'lot-tracker',
            date: 'April 2022',
            desc: 'Using the experience I got in Java from my Object Oriented Programming, ' +
                'I wanted to solve a problem I was facing at my part-time position at Fisher Packing. ' +
                'We were writing all of the lot numbers of ingredients by hand, ' +
                'so I sped up the process with lot-tracker!',
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

