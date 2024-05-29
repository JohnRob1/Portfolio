import styles from '../styles/Experiences.module.css';
import global from '../styles/Global.module.css';
import dannarPic from '../assets/dannarPic.png';
import fisherPic from '../assets/fisherPic.png';
import Tiles from './Tiles.js';

export default function Experiences() {
    const content = {
        'Software Engineer Intern at Dannar': {
            key: 'dannar',
            date: 'Summer 2024',
            desc: 'I am going to develop software using IQAN for Dannar!',
            pics: [dannarPic]
        },
        'Software Consultant for Fisher Packing': {
            key: 'fishers',
            date: 'Summer 2023',
            desc: 'I was responsible for getting all of Fisher Packing\'s inventory digitalized. This was needed to streamline quality assurance practices for all of their products. By the end of summer, I developed an GS1-128 barcode decoding extension for Google Sheets, input all inventory and recipe data into an inventory tracking software, and used Google Forms to digitalize the quality assurance logs.',
            pics: [fisherPic]
        },
        'Coaching Wrestling': {
            key: 'coaching',
            date: 'May 2022 - Present',
            desc: 'I coach wrestling at Harrison High School.'
        },
        'Boiler Awakening': {
            key: 'awakening',
            date: 'Fall 2021 - Spring 2024',
            desc: 'I am a retreatant and 4-time staffer of Boiler Awakening.'
        },
        'Ignite': {
            key: 'ignite',
            date: 'Fall 2020 - Fall 2023',
            desc: 'I was a member, leader, and coordinator of multiple Ignite groups!'
        }
    };

    return (
        <div className={styles.container}>
            <div className={global.title} id="experiences">
                EXPERIENCES
            </div>
            <Tiles tiles={content} />
        </div>
    );
}

