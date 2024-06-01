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
    const title = link[0];
    const addr = link[1];

    return (
        <>
            <a className={global.link} href={addr}>{title}</a>
        </>
    );
}

function Description({ desc }) {
    const lines = desc.split('\n');
    const lastLine = lines.pop();

    return (
        <div className={styles.desc}>
            {lines.map((line, index) => (
                <div key={index}>{line}<br /></div>
            ))
            }
            {lastLine}
        </div >
    );

}

function Header({ title, date }) {
    return (
        <>
            <div className={styles.titleAndDate}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
        </>
    );
}

function Content({ pics, links }) {
    return (
        <>
            <div className={global.links}>
                {links?.map((link) => (
                    <Link key={link} link={link} />
                ))}
            </div>
            <div className={styles.pics}>
                {pics?.map((pic) => (
                    <Picture key={pic} pic={pic} />
                ))}
            </div>
        </>
    );
}

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
                        id={curr.key}
                        onClick={() => setExpanded(isOpen ? false : index)}
                    >
                        <Header title={title} date={curr.date} />
                        <Description desc={curr.desc} />
                        <AnimatePresence initial={false}>
                            <motion.div
                                className={styles.picsAndLinks}
                                key="content"
                                initial="collapsed"
                                animate={isOpen ? "open" : "collapsed"}
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto", pointerEvents: "auto" },
                                    collapsed: { opacity: 0, height: 0, pointerEvents: "none" }
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <Content pics={curr.pics} links={curr.links} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            })}
        </>
    );
}
