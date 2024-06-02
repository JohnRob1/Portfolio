import global from '../styles/Global.module.css';
import * as Images from './Global.js';
import Tiles from './Tiles.js';

export default function Experiences() {
    const content = {
        'Software Engineer Intern at Dannar': {
            key: 'dannar',
            date: 'Summer 2024',
            mainDesc: 'I will be working alongside a software engineer to help develop software for ' +
                'Dannar\'s Mobile Power Station!',
            moreDesc: ' ',
            pics: [Images.dannarPic]
        },
        'Software Consultant for Fisher Packing': {
            key: 'fishers',
            date: 'Summer 2023',
            mainDesc: 'I was responsible for getting all of Fisher Packing\'s inventory digitalized. ' +
                'This was needed to streamline quality assurance practices for all of their products. ' +
                'By the end of summer, I developed an GS1-128 barcode decoding extension for Google Sheets, ' +
                'input all inventory and recipe data into an inventory tracking software, ' +
                'and used Google Forms to digitalize the quality assurance logs.',
            moreDesc: ' ',
            pics: [Images.fisherPic]
        },
        'Coaching Wrestling': {
            key: 'coaching',
            date: 'May 2022 - Present',
            mainDesc: 'Assistant Wrestling Coach at Harrison High School.',
            moreDesc: 'Heading into Purdue, I was not able to walk on to the wrestling as I\'d hoped. ' +
                'COVID did not make the sport very accessible during that time, so once it became less of a threat, ' +
                'I got involved in the sport again by becoming a volunteer coach. Harrison has one of the ' +
                'best coaching staff\'s in Indiana, and I am very thankful to be apart of it! Our room was ' +
                'hard-working, motivated, and team-focused, full of an unwavering spirit of family, which ' +
                'was my favorite aspect.',
            pics: [Images.hWrestling]
        },
        'Boiler Awakening': {
            key: 'awakening',
            date: 'Fall 2021 - Fall 2024',
            mainDesc: 'Retreatant and Staffer of the Boiler Awakening Retreat hosted by Boiler Catholics',
            moreDesc: 'At Boiler Awakening (BA), I was first a retreatant, then a small group leader twice, ' +
                'and on general staff for the second time in Fall 2024. ' +
                'I\'ve been to many Catholic retreats and conferences, had incredible experiences, ' +
                'and deeper understandings of my faith. BA, however, has been the best. ' +
                'Once you go through this retreat, you leave with a better understanding of God\'s love for you, ' +
                'other\'s love for you, and what is holding you back from receiving it! This was a very ' +
                'important part of my college experience, which is why it will be my fourth time staffing ' +
                'in Fall 2024!',
            pics: [Images.baAlex, Images.baFloat],
        },
        'Ignite': {
            key: 'ignite',
            date: 'Fall 2020 - Fall 2023',
            mainDesc: 'Member, Leader, and Coordinator of multiple Ignite groups!',
            moreDesc: 'The first ministry I became apart of at Boiler Catholics was Ignite, which is ' +
                'a Catholic small group focused on prayer, scripture, and discipleship. ' +
                'I was a member in an Ignite group my first semester of college, and continued to simultaneously ' +
                'be a member of an Ignite group and lead my own! During the Spring semester of 2023, I was a ' +
                'coordinator of multiple Ignite leaders as well as leading my own. For this role, I would help ' +
                'organize the Ignite retreat, and held biweekly meetings with my assigned leaders to ' +
                'stay updated about their groups and help each other grow spiritually. ' +
                'I\'ve developed important friendships and social skills through this ministry, and it was been ' +
                'a pleasure to be able to make a positive impact on Purdue\'s campus.',
        }
    };

    return (
        <>
            <div className={global.title} id="experiences">
                EXPERIENCES
            </div>
            <Tiles tiles={content} />
        </>
    );
}
