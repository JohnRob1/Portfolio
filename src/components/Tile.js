import styles from '../styles/Tile.module.css';
import global from '../styles/Global.module.css';

function Picture({ pic }) {
    return (
        <div className={global.picture}>
            {pic}
        </div>
    );
}

function Link({ ref }) {
    const title = ref.substring(0, ref.indexOf(':'));
    const addr = ref.substring(ref.indexOf(':') + 1);

    return (
        <a className={styles.link} href={addr}>{title}</a>
    );
}

export default function Tile({ title, date, desc, pics, links }) {
    return (

        <div className={styles.tile}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.picsAndLinks}>
                <div className={styles.links}>
                    {links?.map((link) => (
                        <Link key={link} ref={link} />
                    ))};
                </div>
                <div className={styles.pics}>
                    {pics?.map((pic) => (
                        <Picture key={pic} pic={pic} />
                    ))};
                </div>
            </div>
        </div>
    );
}
