import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Assignment from './Assignment.js';
import { useState } from 'react';

const Weight = () => {
    const [wName, setwName] = useState('Weight');
    const [actual, setActual] = useState(0);
    const [weight, setWeight] = useState(100);
    const [assignments, setAssignments] = useState([<Assignment />]);
    const grade = actual / weight;

    const Add5Assignments = () => {
        setAssignments(prevAssignments => {
            const newAssignments = [...prevAssignments];
            for (let i = 0; i < 5; i++) {
                newAssignments.push(<Assignment key={assignments.length + i} />);
            }
            return newAssignments;
        });
    }

    const modifiedLink = {
        fontWeight: 'bolder',
        marginInline: '0px',
        width: '40%',
        color: 'var(--primary)'
    }

    return (
        <>
            <div className={styles.classHeader} style={{ width: '100%' }}>
                <div className={styles.classAttrs}>
                    {wName}
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={styles.classAttrs}>
                        {actual + ' / ' + weight}
                    </div>
                    <div className={styles.classAttrs}>
                        {grade + '%'}
                    </div>
                    <div
                        className={global.link}
                        style={{ color: 'var(--primary)', margin: '0px' }}>
                        Delete
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {assignments}
            <div className={styles.classHeader}>
                <div
                    className={global.link}
                    style={modifiedLink}
                    onClick={() => setAssignments([...assignments, <Assignment key={assignments.length} />])}>
                    Add Assignment
                </div>
                <div
                    className={global.link}
                    style={modifiedLink}
                    onClick={() => Add5Assignments()}>
                    Add 5 Assignments
                </div>
            </div>
        </>
    );
}

export default Weight;
