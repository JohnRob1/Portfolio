import styles from '../styles/Home.module.css';
import { useRef, useEffect } from 'react';
import { ScreenWidth } from './Global.js';
const accent = '#bd7418';
const tertiary = '#e2e2e2';

function NavBar({ links }) {
    return (
        <ul className={styles.nav}>
            {links?.map((link) => {
                return (
                    <li onClick={() => (
                        document.getElementById(link.toLowerCase()).scrollIntoView(
                            { behavior: "smooth" }
                        )
                    )}>{link}</li>
                );
            })}
        </ul>
    );
}

function Circle({ color }) {
    const circleRef = useRef(null);
    const diameter = ScreenWidth() >= 650 ? 12 : 10;

    useEffect(() => {
        const circle = circleRef.current;
        const ctx = circle.getContext('2d');
        ctx.beginPath();
        ctx.arc((diameter / 2), (diameter / 2), 45, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
    })

    return (
        <canvas
            className={styles.circle}
            ref={circleRef}
            width={diameter}
            height={diameter}
        />
    );
}

function Skill({ name, rating }) {
    return (
        <div className={styles.skill}>
            <div className={styles.skillName}>{name}</div>
            <div className={styles.circles}>
                <Circle color={(rating > 0) ? accent : tertiary} />
                <Circle color={(rating > 1) ? accent : tertiary} />
                <Circle color={(rating > 2) ? accent : tertiary} />
                <Circle color={(rating > 3) ? accent : tertiary} />
                <Circle color={(rating > 4) ? accent : tertiary} />
            </div>
        </div >
    );
}

export function Skills() {
    return (
        <div className={styles.skills}>
            <Skill name={'HTML'} rating={4} />
            <Skill name={'CSS'} rating={4} />
            <Skill name={'Javascript'} rating={3} />
            <Skill name={'Java'} rating={4} />
            <Skill name={'C/C++'} rating={4} />
            <Skill name={'Django'} rating={3} />
            <Skill name={'Flutter'} rating={3} />
            <Skill name={'React'} rating={2} />
            <Skill name={'Firebase'} rating={2} />
            <Skill name={'SQL'} rating={2} />
            <Skill name={'Linux'} rating={4} />
            <Skill name={'Python'} rating={3} />
        </div>
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
            <NavBar links={["About", "Experiences", "Creations"]} />
            {ScreenWidth() >= 650
                ? <Skills />
                : <></>}
        </div>
    );
}
