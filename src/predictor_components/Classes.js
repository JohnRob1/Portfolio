import styles from '../predictor_styles/Classes.module.css';
import global from '../portfolio_styles/Global.module.css';
import React, { useState } from 'react';
import Assignment from './Assignment.js';

function SumTotal(array) { return array.reduce((sum, a) => sum + parseFloat(a.total), 0); }

// NOTE: used to handle the state of the assignment list, so the user can edit without rerenders
const AssignmentList = () => {
    const [list, setList] = useState([
        { name: 'Assignment', actual: 0, total: 100 }
    ]);
    const [attrs, setAttrs] = useState({
        actual: 0,
        total: 100,
        grade: 0
    });

    const maxAssignments = 50;
    const [addAmount, setAddAmount] = useState(1);
    function addAssignment() {
        setList(prev => {
            if (prev.length + addAmount > maxAssignments) return prev;

            const newAssignments = [...prev];
            const assignmentTotal = ((attrs.total - SumTotal(list)) / addAmount).toFixed(2);

            for (let i = 0; i < addAmount; i++) {
                newAssignments.push({
                    name: 'Assignment',
                    actual: 0,
                    total: assignmentTotal > 0 ? assignmentTotal : 0
                });
            }

            return newAssignments;
        });
    }

    const AmountModifier = ({ num, more }) => {
        const ChangeAmount = () => {
            if (more && addAmount < (maxAssignments - num))
                setAddAmount(addAmount + num)
            else if (!more && addAmount > (num))
                setAddAmount(addAmount - num)
        }

        return (
            <div
                className={styles.inClassButton}
                style={{ width: '10%' }}
                onClick={() => ChangeAmount()}>
                {num} {more ? 'More' : 'Less'}
            </div>
        );
    }

    const AssignmentAddButton = () => {
        if (list.length < maxAssignments) {
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <AmountModifier num={1} more={false} />
                    <AmountModifier num={5} more={false} />
                    <div
                        className={styles.inClassButton}
                        style={{ width: '80%' }}
                        onClick={() => addAssignment()}>
                        Add {addAmount} Assignment{addAmount > 1 ? 's' : ''}
                    </div>
                    <AmountModifier num={1} more={true} />
                    <AmountModifier num={5} more={true} />
                </div>
            );
        } else {
            return (
                <div className={styles.errorMsg}>
                    Assignment Limit Reached
                </div>
            );
        }
    }

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
            <AssignmentAddButton />
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
