import styles from '../styles/Home.module.css';
import { useRef, useEffect } from 'react';
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

function Skills({ skills }) {
    return (
        <div className={styles.skills}>
            <Circle
                diameter={20}
                fill={tertiary}
            />
        </div>
    );
}

function Circle({ diameter, fill }) {
    const circleRef = useRef(null)

    useEffect(() => {
        const circle = circleRef.current;
        const ctx = circle.getContext('2d');
        ctx.beginPath();
        ctx.arc((diameter / 2), (diameter / 2), 45, 0, 2 * Math.PI, false);
        ctx.fillStyle = fill;
        ctx.fill();
    })

    return (
        <canvas
            ref={circleRef}
            width={diameter}
            height={diameter}
            style={{ border: '1px solid var(--tertiary)', borderRadius: '10' }}
        />
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
        </div>
    );
}
