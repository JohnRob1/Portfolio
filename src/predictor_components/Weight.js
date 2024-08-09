import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Header from './GradeHeader.js';
import { useState } from 'react';

function Sum(array) {return (array.reduce((sum, i) => sum + i))}
const maxAssignments = 50;

const Weight = () => {
    const [name, setName] = useState('Weight');

    const [actuals, setActuals] = useState([0]);
    const [actual, setActual] = useState(Sum(actuals));

    const [totals, setTotals] = useState([100]);
    const [total, setTotal] = useState(Sum(totals));

    const [addAmount, setAddAmount] = useState(1);
    const [assignments, setAssignments] = useState([
        { id: 0, name: 'Assignment', actual: actuals[0], total: total }
    ]);

    const removeAssignment = (id) => {
        setAssignments(assignments.filter(a => a.id !== id));
    }

    const addAssignment = () => {
        setAssignments(prevAssignments => {
            if (prevAssignments.length + addAmount > maxAssignments) return prevAssignments;

            const newAssignments = [...prevAssignments];
            const assignmentTotal = ((total - Sum(totals)) / addAmount).toFixed(2);

            for (let i = 0; i < addAmount; i++) {
                const id = assignments.length + i;
                const newTotals = [...totals, assignmentTotal];
                const newActuals = [...actuals, 0];
                setTotals(newTotals);
                setActuals(newActuals);

                newAssignments.push({
                    id: id,
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

    const AddButton = () => {
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
                name={name}
                actual={actual}
                total={total}
            />
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {assignments.map(a => (
                <Header
                    key={a.id}
                    id={a.id}
                    name={a.name}
                    actual={a.actual}
                    total={a.total}
                    remove={removeAssignment}
                />
            ))}
            <AddButton />
        </>
    );
}

export default Weight;
