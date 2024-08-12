import styles from '../predictor_styles/Classes.module.css';
import global from '../portfolio_styles/Global.module.css';
import React, { useState } from 'react';
import Assignment from './Assignment.js';

// NOTE: used to handle the state of the assignment list, so the user can edit without rerenders
const AssignmentList = () => {
    const [list, setList] = useState([
        { name: 'Assignment', actual: 0.00, total: 100.00 },
        { name: 'Assignment', actual: 0.00, total: 100.00 }
    ]);
    const [attrs, setAttrs] = useState({
        actual: 0,
        total: 200,
        grade: 0
    });

    return (
        <>
            <div>{attrs.actual} / {attrs.total} {attrs.grade}%</div>
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {list.map((a, index) =>
                <Assignment
                    key={index}
                    name={a.name}
                    actual={a.actual}
                    total={a.total}
                    setParent={setAttrs}
                />
            )}
        </>
    );
}

const Classes = () => {
    return (
        <div className={styles.classes}>
            <h1 className={global.title}>
                Classes
            </h1>
            <div className={styles.classListContainer}>
                <AssignmentList />
                <div
                    className={global.link}
                    style={{ fontWeight: 'bolder', width: '100%' }}>
                    Add Class
                </div>
            </div>
        </div>
    );
}

export default Classes;
