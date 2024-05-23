import styles from '../styles/Tile.module.css';
import global from '../styles/Global.module.css';

function Picture({ pic }) {
    return (
        <>
            <img className={global.picture}
                src={pic}
                alt={pic}
            />
        </>
    );
}

function Link({ link }) {
    const title = link.substring(0, link.indexOf(':'));
    const addr = link.substring(link.indexOf(':') + 1);

    return (
        <>
            <a className={styles.link} href={addr}>{title}</a>
        </>
    );
}

export default function Tile({ title, date, desc, pics, links }) {
    return (

        <div className={styles.tile}>
            <div className={styles.titleAndDate}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
            <p className={styles.desc}>
                {desc}
            </p>
            <div className={styles.picsAndLinks}>
                <div className={styles.links}>
                    {links?.map((link) => (
                        <Link key={link} link={link} />
                    ))}
                </div>
                <div className={styles.pics}>
                    {pics?.map((pic) => (
                        <Picture key={pic} pic={pic} />
                    ))}
                </div>
            </div>
        </div>
    );
}
