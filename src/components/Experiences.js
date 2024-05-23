import styles from '../styles/Experiences.module.css';
import global from '../styles/Global.module.css';
import dannarPic from '../assets/dannarPic.png';
import fisherPic from '../assets/fisherPic.png';
import Tile from '../components/Tile.js';

export default function Experiences() {
    return (
        <div className={styles.container}>
            <div className={global.title}>
                EXPERIENCES
            </div>
            <Tile
                title='Software Engineer Intern at Dannar'
                date='June 2024 - August 2024'
                desc='I am going to develop software using IQAN for Dannar!'
                pics={[dannarPic]}
            />
            <Tile
                title='Software Consultant for Fisher Packing'
                date='May 2023 - August 2023'
                desc={'I was responsible for getting all of Fisher Packing\'s ' +
                    'inventory digitalized. This was needed to streamline quality ' +
                    'assurance practices for all of their products. By the end of ' +
                    'summer, I developed an GS1-128 barcode decoding extension for Google Sheets, ' +
                    'input all inventory and recipe data into an inventory tracking software, ' +
                    'and used Google Forms to digitalize the quality assurance logs.'}
                pics={[fisherPic]}
            />
            <Tile
                title='Coaching Wrestling'
                date='May 2022 - Present'
                desc='I coach wrestling at Harrison High School.'
            />
            <Tile
                title='Boiler Awakening'
                date='Fall 2021 - Spring 2024'
                desc='I am a retreatant and 4-time staffer of Boiler Awakening.'
            />
            <Tile
                title='Ignite'
                date='Fall 2020 - Fall 2023'
                desc='I was a member, leader, and coordinator of multiple Ignite groups!'
            />
        </div>
    );
}
