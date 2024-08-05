import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import Weight from './Weight.js';
import { useState } from 'react';

const Class = () => {
    const [name, setName] = useState('Your Class');
    const [actual, setActual] = useState(0);
    const [total, setTotal] = useState(100);
    const [weights, setWeights] = useState([<Weight key={0} />])
    const grade = actual / total;

    return (
        <div className={styles.classContainer}>
            <div className={styles.classHeader}>
                <div className={styles.classAttrs}>
                    {name}
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={styles.classAttrs}>
                        {actual + ' / ' + total}
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
            <hr style={{ borderTop: '2px solid var(--primary)', width: '100%' }} />
            {weights}
            <div
                className={global.link}
                style={{ fontWeight: 'bolder', width: '100%', color: 'var(--primary)' }}
                onClick={() => setWeights([...weights, <Weight key={weights.length} />])}>
                Add Weight
            </div>
        </div>
    );
}

const ClassList = () => {
    const [classList, setClassList] = useState([<Class />]);

    return (
        <div className={styles.classes}>
            <h1 className={global.title}>
                Classes
            </h1>
            <div className={styles.classListContainer}>
                {classList.map((_, index) => (
                    <Class key={index} />
                ))}
                <div
                    className={global.link}
                    style={{ fontWeight: 'bolder', width: '100%' }}
                    onClick={() => setClassList([...classList, {}])}>
                    Add Class
                </div>
            </div>
        </div >
    );
}

export default ClassList;
