import styles from '../styles/Home.module.css';
import global from '../styles/Global.module.css';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    return (
        <ul className={styles.nav}>
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#creations">Creations</a></li>
        </ul>
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
        </>
    );
}

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={global.title}>
                JOHN ROBINSON
            </div>
            <Contact />
            <NavBar />
        </div>
    );
}
