import Tiles from './Tiles.js';
import global from '../styles/Global.module.css';

export default function Creations() {
    const content = {
        'FinanceFriend': {
            key: 'financefriend',
            date: 'Fall 2023',
            desc: 'Senior Software Engineering Project at Purdue',
            links: ["Github Repo:https://github.com/JohnRob1/FinanceFriend.git"]
        },
        'MediLingo': {
            key: 'medilingo',
            date: 'October 2023',
            desc: 'My Project at the PittChallenge Hackathon',
            links: ["Github Repo:https://github.com/JohnRob1/MediLingo",
                "DevPost:https://devpost.com/software/medilingo"
            ]
        },
        'JudgeMe': {
            key: 'judgeme',
            date: 'Fall 2022',
            desc: 'Software Engineer Class Project at Purdue',
            links: ["Github Repo:https://github.com/JohnRob1/JudgeMe"]
        },
        'Messaging Application': {
            key: 'cs180project',
            date: 'Fall 2020',
            desc: 'Final Project in my Object Oriented Programming class at Purdue',
            links: ["Github Repo:https://github.com/JohnRob1/Project5"]
        },
        'Lot Tracking Application in Java': {
            key: 'lot-tracker',
            date: 'April 2022',
            desc: 'Using the experience I got in Java from my Object Oriented Programming, I wanted to solve a problem I was facing at my part-time position at Fisher Packing. We were writing all of the lot numbers of ingredients by hand, so I sped up the process with lot-tracker!',
            links: ["Github Repo:https://github.com/JohnRob1/Project5"]
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

