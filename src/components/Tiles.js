import styles from '../styles/Tiles.module.css';
import global from '../styles/Global.module.css';
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export function Tile({ title, date, desc, pics, links }) {
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

// export default function Tiles({ tiles }) {
//
//     return (
//         <>
//             {Object.keys(tiles).map((title) => {
//                 const curr = tiles[title];
//                 return (<Tile
//                     key={curr.key}
//                     title={title}
//                     date={curr.date}
//                     desc={curr.desc}
//                     pics={curr.pics}
//                     links={curr.links}
//                 />);
//             })}
//         </>
//     );
// }

export default function Tiles({ tiles }) {
    const [expanded, setExpanded] = useState(-1);

    return (
        <>
            {Object.keys(tiles).map((title, index) => {
                const isOpen = index === expanded;
                const curr = tiles[title];

                return (
                    <div
                        className={styles.tile}
                        key={curr.key}
                        onClick={() => setExpanded(isOpen ? false : index)}
                    >
                        <div className={styles.titleAndDate}>
                            <div className={styles.title}>
                                {title}
                            </div>
                            <div className={styles.date}>
                                {curr.date}
                            </div>
                        </div>
                        <p className={styles.desc}>
                            {curr.desc}
                        </p>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    className={styles.picsAndLinks}
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className={styles.links}>
                                        {curr.links?.map((link) => (
                                            <Link key={link} link={link} />
                                        ))}
                                    </div>
                                    <div className={styles.pics}>
                                        {curr.pics?.map((pic) => (
                                            <Picture key={pic} pic={pic} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </>
    );
}
