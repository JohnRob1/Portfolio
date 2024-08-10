import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Header from './GradeHeader.js';
import { useState } from 'react';

const maxAssignments = 50;
function SumTotal(array) { return array.reduce((sum, a) => sum + parseFloat(a.total), 0); }
function SumActual(array) { return array.reduce((sum, a) => sum + parseFloat(a.actual), 0); }

const Weight = () => {
    const [weight, setWeight] = useState({ name: 'Weight', actual: 0, total: 100 });
    const [addAmount, setAddAmount] = useState(1);
    const [assignments, setAssignments] = useState([
        { name: 'Assignment', actual: 0, total: 100 }
    ]);

    const updateAssignment = (id, attr, newVal) => {
        setAssignments(prevAssignments => {
            const updatedAssignments = [...prevAssignments];
            updatedAssignments[id] = {
                ...updatedAssignments[id],
                [attr]: newVal
            };

            setWeight({
                name: weight.name,
                actual: SumActual(updatedAssignments),
                total: (SumTotal(updatedAssignments) > weight.total)
                    ? SumTotal(updatedAssignments) : weight.total
            });

            return updatedAssignments;
        });
    };

    const removeAssignment = (id) => {
        setAssignments(assignments.filter((_, index) => id !== index));
    };

    const addAssignment = () => {
        setAssignments(prevAssignments => {
            if (prevAssignments.length + addAmount > maxAssignments) return prevAssignments;

            const newAssignments = [...prevAssignments];
            const assignmentTotal = ((weight.total - SumTotal(assignments)) / addAmount).toFixed(2);

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

    const AssignmentAddButton = () => {
        const AmountModifier = ({ num, more }) => {
            const ChangeAmount = () => {
                if (more && addAmount < (maxAssignments - num))
                    setAddAmount(addAmount + num)
                else if (!more && addAmount > (num))
                    setAddAmount(addAmount - num)
            }

            return (
                <div
                    className={global.link}
                    style={{
                        fontWeight: 'bolder',
                        marginInline: '5px',
                        color: 'var(--primary)',
                        width: '10%'
                    }}
                    onClick={() => ChangeAmount()}>
                    {num} {more ? 'More' : 'Less'}
                </div>
            );
        }

        if (assignments.length < maxAssignments) {
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <AmountModifier num={1} more={false} />
                    <AmountModifier num={5} more={false} />
                    <div
                        className={global.link}
                        style={{
                            fontWeight: 'bolder',
                            marginInline: '5px',
                            color: 'var(--primary)',
                            width: '80%',
                        }}
                        onClick={() => addAssignment()}>
                        Add {addAmount} Assignment{addAmount > 1 ? 's' : ''}
                    </div>
                    <AmountModifier num={1} more={true} />
                    <AmountModifier num={5} more={true} />
                </div>
            );
        } else {
            return (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bolder',
                    marginInline: '5px',
                    color: 'var(--primary)',
                    width: '100%'
                }}>
                    Assignment Limit Reached
                </div>
            );
        }
    }

    return (
        <>
            <Header
                id={0}
                name={weight.name}
                actual={weight.actual}
                total={weight.total}
            />
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {assignments.map((a, index) => (
                <Header
                    key={index}
                    id={index}
                    name={a.name}
                    actual={a.actual}
                    total={a.total}
                    remove={removeAssignment}
                    update={updateAssignment}
                />
            ))}
            <AssignmentAddButton />
        </>
    );
}

export default Weight;
