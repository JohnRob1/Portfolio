import styles from '../styles/About.module.css';
import global from '../styles/Global.module.css';
import ProfilePic from '../assets/ProfilePic.jpeg';
import WeddingPic from '../assets/WeddingPic.JPEG';

function ProfilePicture() {
    return (
        <div>
        <img className={global.picture}
             src={ProfilePic}
             alt="ProfilePic"/>
        <img className={global.picture}
             src={WeddingPic}
             alt="WeddingPic"/>
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

export default function About() {
    return (
        <div className={styles.container}>
            <div className={global.title}>
                ABOUT ME
            </div>
            <ProfilePicture />
            <Objective />
        </div> 
    );
}
