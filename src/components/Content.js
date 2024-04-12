import styles from '../styles/Content.module.css';
import About from './About';
import Contact from './Contact';
import Creations from './Creations';
import Experiences from './Experiences';

export default function Content() {
    return (
        <div className={styles.content}>
            <About/>
            <Experiences/>
            <Creations/>
            <Contact/>
        </div>
    );
}