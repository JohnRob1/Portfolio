import styles from './Home.module.css';
import ProfilePic from './ProfilePic.jpeg';

function NavBar() {
    //Make an if statement to prepare for small screens
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">Education</a>
            <a href="">Experience</a>
            <a href="">Creations</a>
            <a href="">Contact</a>
        </div>
    );
}

function ProfilePicture() {
    return (
        <img className={styles.profilePic}
             src={ProfilePic}
             alt="ProfilePic"/>
    );
}

function Name() {
    return (
        <div className={styles.name}>
            John Robinson
        </div>
    );
}

function Objective() {
    return (
        <div className={styles.objective}>
            Software Engineering!
        </div>
    );
}

export default function Home() {
    return (
        <section>
            <NavBar />
            <div className={styles.intro}>
                <ProfilePicture />
                <div className={styles.nameAndObj}>
                    <Name/>
                    <Objective/>
                </div>
            </div>
        </section>
    );
}