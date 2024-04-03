import styles from "../styles/About.module.css";
import ProfilePic from "../assets/ProfilePic.jpeg";

function ProfilePicture() {
    return (
        <img className={styles.profilePic}
             src={ProfilePic}
             alt="ProfilePic"/>
    );
}

function Objective() {
    return (
        <p className={styles.objective}>
            Software Engineering!
        </p>
    );
}
