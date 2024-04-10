import styles from '../styles/Home.module.css';
import Timeline from './Timeline';

function NavBar() {
    //Make an if statement to prepare for small screens
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Education</a>
            <a href="">Experiences</a>
            <a href="">Creations</a>
            <a href="">Contact</a>
        </div>
    );
}


export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>
                John Robinson
            </h1>
            <div className={styles.timeAndNav}>
                <Timeline />
                <NavBar />
            </div>
        </div>
    );
}