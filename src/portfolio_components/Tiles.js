import styles from '../portfolio_styles/Tiles.module.css';
import global from '../portfolio_styles/Global.module.css';
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { IconContext } from 'react-icons';

function Header({ title, date, expanded }) {
    return (
        <>
            <div className={styles.titleAndDate}>
                <div className={styles.title}>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <div>
                            {expanded
                                ? <IoMdArrowDropdown size={25} />
                                : <IoMdArrowDropright size={25} />
                            }
                        </div>
                    </IconContext.Provider>
                    {title}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
        </>
    );
}

function Description({ desc }) {
    const lines = desc.split('\n');
    const lastLine = lines.pop();

    return (
        <>
            <div className={styles.desc}>
                {lines.map((line) => (<>{line}<br /></>))}
                {lastLine}
            </div>
        </>
    );
}

function Picture({ pic }) {
    return (
        <>
            <img
                className={global.picture}
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
        <><a
            className={global.link}
            href={addr}>
            {title}
        </a></>
    );
}

function Content({ pics, links }) {
    return (
        <>
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
                        id={curr.key}
                        className={styles.tile}
                        key={curr.key}
                        onClick={() => setExpanded(isOpen ? false : index)}
                    >
                        <Header title={title} date={curr.date} expanded={isOpen} />
                        <Description desc={curr.mainDesc} />
                        <AnimatePresence initial={false}>
                            <motion.div
                                className={styles.contentContainer}
                                key="content"
                                initial="collapsed"
                                animate={isOpen ? "open" : "collapsed"}
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto", pointerEvents: "auto" },
                                    collapsed: { opacity: 1, height: 0, pointerEvents: "none" }
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <Description desc={curr.moreDesc} />
                                <Content pics={curr.pics} links={curr.links} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            })}
        </>
    );
}
