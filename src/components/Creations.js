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
                desc='Senior Software Engineering Project at Purdue'
                links={["Github Repo:https://github.com/JohnRob1/FinanceFriend.git"]}
            />
        </>
    );
}
