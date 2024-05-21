import Tile from './Tile.js';
import global from '../styles/Global.module.css';

export default function Creations() {
    return (
        <>
            <div className={global.title}>
                CREATIONS
            </div>
            <Tile 
                title='FinanceFriend'
                date='August 2023 - December 2023'
                descr='Senior Software Engineering Project at Purdue'
                references={["Github Repo:https://github.com/JohnRob1/FinanceFriend.git"]}
            />
        </>
    );
}
