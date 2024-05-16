import styles from '../styles/Experiences.module.css';
import global from '../styles/Global.module.css';
import dannarPic from '../assets/dannarPic.png';

function Picture({ pic }) {
    return (
        <>
            <img className={global.picture}
                src={pic}
                alt='ExperiencePicture'/> 
        </>
    );

}

function Tile({ title, date, descr, pictures }) {
    const pics = pictures.map(
        pic => <Picture key="{pic}" pic={pic} />
    );

    return (
        <div className={styles.tile}>
            <div className={styles.titleAndDateContainer}>
                <div className={styles.titleAndDateStyle}>{title}</div>
                <div className={styles.titleAndDateStyle}>{date}</div>
            </div>
            <p className={styles.descr}>
                {descr}
            </p>
            <div className={styles.pictures}>
                {pics}
            </div>
        </div>
    );
}

export default function Experiences() {
    return (
        <div className={styles.container}>
            <div className={global.title}>
                EXPERIENCES
            </div>
            <Tile 
                title={'Software Engineer Intern at Dannar'}
                date={'June 2024 - August 2024'}
                descr={'Writing software with IQAN for the MPS.'}
                pictures={[dannarPic]}
            />
        </div>
    );
}
