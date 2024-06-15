import styles from '../portfolio_styles/About.module.css';
import global from '../portfolio_styles/Global.module.css';
import resume from '../assets/ResumeSpring2024.pdf';
import ProfilePic from '../assets/ProfilePic.jpeg';
import WeddingPic from '../assets/WeddingPic.JPEG';
import { SocialIcon } from 'react-social-icons';

function ProfilePicture() {
    return (
        <div>
            <img className={global.picture}
                src={ProfilePic}
                alt="ProfilePic" />
            <img className={global.picture}
                src={WeddingPic}
                alt="WeddingPic" />
        </div>
    );
}

function Objective() {
    return (
        <p className={styles.objective}>
            I'm a Senior in Computer Science at Purdue, concentrating
            in Software Engineering. I love to program in order to solve
            challenging problems, big or small!
        </p>
    );
}

function Contact() {
    return (
        <>
            <div className={styles.socialsContainer}>
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="mailto:jrobinson6114@gmail.com" />
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="https://www.linkedin.com/in/JohnRob1/" />
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="https://github.com/JohnRob1" />
            </div>
            <div className={styles.resume}>
                <a className={global.link} href={resume} rel="noreferrer" target="_blank">Current Resume</a>
            </div>
        </>
    );
}

export default function About() {
    return (
        <div className={styles.container} id='about'>
            <div className={global.title}>
                ABOUT ME
            </div>
            <ProfilePicture />
            <Objective />
            <Contact />
        </div>
    );
}
