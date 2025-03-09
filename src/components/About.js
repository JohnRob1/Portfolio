import styles from '../styles/About.module.css';
import global from '../styles/Global.module.css';
import ProfilePic from '../assets/ProfilePic.jpeg';
import WeddingPic from '../assets/WeddingPic.JPEG';
import { Skills } from './Home.js';
import { SocialIcon } from 'react-social-icons';
import { ScreenWidth } from './Global.js';

function ProfilePicture() {
    const profileStyle = {
        width: ScreenWidth() >= 650 ? '22vw' : '35vw',
        borderRadius: '20px',
        marginInline: '2vw',
        marginBlock: '15px',
    };

    return (
        <div>
            <img style={profileStyle} src={ProfilePic} alt="ProfilePic" />
            <img style={profileStyle} src={WeddingPic} alt="WeddingPic" />
        </div>
    );
}

function Objective() {
    return (
        <p className={styles.objective}>
            I'm a Software Engineer at Wavelogix. I love to program in order to solve challenging
            problems, big or small!
        </p>
    );
}

function Contact() {
    return (
        <>
            <div className={styles.socialsContainer}>
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="mailto:jrobinson6114@gmail.com"
                />
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="https://www.linkedin.com/in/JohnRob1/"
                />
                <SocialIcon
                    style={{ height: 30, width: 30, margin: 5 }}
                    url="https://github.com/JohnRob1"
                />
            </div>
            <div className={styles.resume}>
                <a
                    className={global.link}
                    href="https://drive.google.com/file/d/1tQvS7RQAKWmjdgReeigW7UDB2_18od7O/view?usp=sharing">
                    Current Resume
                </a>
            </div>
        </>
    );
}

export default function About() {
    return (
        <div className={styles.container} id="about">
            <div className={global.title}>ABOUT ME</div>
            <ProfilePicture />
            <Objective />
            {ScreenWidth() < 650 ? <Skills /> : <></>}
            <Contact />
        </div>
    );
}
