import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Header from './GradeHeader.js';
import { useState } from 'react';

const Weight = () => {
    const [name, setName] = useState('Weight');
    const [actual, setActual] = useState(0);
    const [total, setTotal] = useState(100);
    const [assignments, setAssignments] = useState([<Header />]);

    const Add5Assignments = () => {
        setAssignments(prevAssignments => {
            const newAssignments = [...prevAssignments];
            for (let i = 0; i < 5; i++) {
                newAssignments.push(<Header key={assignments.length + i} />);
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
            <Header
                name={name}
                actual={actual}
                total={total}
            />
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {assignments}
            <div className={styles.classHeader}>
                <div
                    className={global.link}
                    style={modifiedLink}
                    onClick={() => setAssignments([...assignments, <Header key={assignments.length} />])}>
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
