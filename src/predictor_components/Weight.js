import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Header from './GradeHeader.js';
import { useState } from 'react';

const Weight = () => {
    const [name, setName] = useState('Weight');
    const [actual, setActual] = useState(0);
    const [total, setTotal] = useState(100);
    const [addAmount, setAddAmount] = useState(1);
    const [assignments, setAssignments] = useState([<Header name='Assignment' actual={actual} total={total} />]);
    const maxAssignments = 20;

    const AddAssignment = () => {
        setAssignments(prevAssignments => {
            const newAssignments = [...prevAssignments];
            for (let i = 0; i < addAmount; i++) {
                newAssignments.push(<Header key={assignments.length + i} />);
            }
            return newAssignments;
        });
    }

    const AmountModifier = ({ num, more }) => {
        const ChangeAmount = () => {
            if (more && addAmount <= (maxAssignments - num))
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

    return (
        <>
            <Header
                name={name}
                actual={actual}
                total={total}
            />
            <hr style={{ borderTop: '1px solid var(--primary)', width: '100%' }} />
            {assignments}
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
                    onClick={() => AddAssignment()}>
                    Add {addAmount} Assignment{addAmount > 1 ? 's' : ''}
                </div>
                <AmountModifier num={1} more={true} />
                <AmountModifier num={5} more={true} />
            </div >
        </>
    );
}

export default Weight;
