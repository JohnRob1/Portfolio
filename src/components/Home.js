import styles from '../styles/Home.module.css';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    return (
        <ul className={styles.nav}>
            <li onClick={() => (
                document.getElementById("about").scrollIntoView(
                    { behavior: "smooth" }
                ))}>About</li>
            <li onClick={() => (
                document.getElementById("experiences").scrollIntoView(
                    { behavior: "smooth" }
                ))}>Experiences</li>
            <li onClick={() => (
                document.getElementById("creations").scrollIntoView(
                    { behavior: "smooth" }
                ))}>Creations</li>
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
            <div className={styles.title}>
                JOHN ROBINSON
            </div>
            <Contact />
            <NavBar />
        </div>
    );
}
