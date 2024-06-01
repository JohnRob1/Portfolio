import styles from '../styles/Home.module.css';

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

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    JOHN ROBINSON
                </div>
            </div>
            <NavBar />
        </div>
    );
}
