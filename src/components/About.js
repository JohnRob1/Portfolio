import styles from '../styles/About.module.css';
import ProfilePic from '../assets/ProfilePic.jpeg';
import WeddingPic from '../assets/WeddingPic.JPEG';

function ProfilePicture() {
    return (
        <div>
        <img className={styles.profilePic}
             src={ProfilePic}
             alt="ProfilePic"/>
        <img className={styles.profilePic}
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
            <ProfilePicture />
            <Objective />
        </div> 
    );
}
