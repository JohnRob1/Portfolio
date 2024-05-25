import Tile from './Tile.js';
import global from '../styles/Global.module.css';

export default function Creations() {
    return (
        <>
            <div className={global.title} id="creations">
                CREATIONS
            </div>
            <Tile
                title='FinanceFriend'
                date={`Fall 2023`}
                desc='Senior Software Engineering Project at Purdue'
                links={["Github Repo:https://github.com/JohnRob1/FinanceFriend.git"]}
            />
            <Tile
                title='MediLingo'
                date={`October 2023`}
                desc='My Project at the PittChallenge Hackathon'
                links={["Github Repo:https://github.com/JohnRob1/MediLingo",
                    "DevPost:https://devpost.com/software/medilingo"
                ]}
            />
            <Tile
                title='JudgeMe'
                date={`Fall 2022`}
                desc='Software Engineer Class Project at Purdue'
                links={["Github Repo:https://github.com/JohnRob1/JudgeMe"]}
            />
            <Tile
                title='Messaging Application'
                date={`Fall 2020`}
                desc='Final Project in my Object Oriented Programming class at Purdue'
                links={["Github Repo:https://github.com/JohnRob1/Project5"]}
            />
            <Tile
                title='Lot Tracking Application in Java'
                date={`April 2022`}
                desc={'Using the experience I got in Java from my Object Oriented Programming, ' +
                    'I wanted to solve a problem I was facing at my part-time position at Fisher ' +
                    'Packing. We were writing all of the lot numbers of ingredients by hand, so I ' +
                    'sped up the process with lot-tracker!'
                }
                links={["Github Repo:https://github.com/JohnRob1/Project5"]}
            />
        </>
    );
}
