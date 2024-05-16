import styles from '../styles/Home.module.css';
import global from '../styles/Global.module.css';
import Timeline from './Timeline';

function NavBar() {
    return (
        <ul className={styles.nav}>
            <li><a className={styles.active} href="#home">Home</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#creations">Creations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    );
}

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={global.title}>
                JOHN ROBINSON
            </div>
            <div className={styles.timeAndNav}>
                <NavBar />
            </div>
        </div>
    );
}
