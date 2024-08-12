import styles from '../predictor_styles/Classes.module.css';
import global from '../portfolio_styles/Global.module.css';
import React, { useState } from 'react';
import Assignment from './Assignment.js';

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

    function removeAssignment(index, actual, total) {
        setList(prev => {
            const newList = prev;
            delete newList[index];
            return newList;
        });
        setAttrs(prev => {
            const newActual = prev.actual - actual;
            const newTotal = prev.total - total;
            const newGrade = parseFloat((newActual / newTotal) * 100).toFixed(2);
            return ({
                actual: newActual,
                total: newTotal,
                grade: (newGrade - Math.floor(newGrade) === 0)
                    ? parseFloat(newGrade).toFixed(0)
                    : newGrade
            });
        });
    }

    const maxAssignments = 50;
    const [addAmount, setAddAmount] = useState(1);
    const [assignmentTotal, setAssignmentTotal] = useState(0);
    function addAssignment() {
        setList(prev => {
            if (prev.length + addAmount > maxAssignments) return prev;

            const newAssignments = [...prev];
            for (let i = 0; i < addAmount; i++) {
                setAttrs(prev => {
                    const newTotal = parseFloat(
                        parseFloat(prev.total) + parseFloat(assignmentTotal)
                    ).toFixed(2);
                    const newGrade = parseFloat((prev.actual / newTotal) * 100).toFixed(2);
                    return ({
                        ...prev,
                        total: (newTotal - Math.floor(newTotal) === 0)
                            ? parseFloat(newTotal).toFixed(0)
                            : newTotal,
                        grade: (newGrade - Math.floor(newGrade) === 0)
                            ? parseFloat(newGrade).toFixed(0)
                            : newGrade
                    });
                });
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
            <input
                type={'number'}
                value={assignmentTotal}
                onChange={e => setAssignmentTotal(e.target.value)}
            />
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {list.map((a, index) => a
                ? <Assignment
                    key={index}
                    id={index}
                    name={a.name}
                    actual={a.actual}
                    total={a.total}
                    setParent={setAttrs}
                    remove={removeAssignment}
                />
                : <></>
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
