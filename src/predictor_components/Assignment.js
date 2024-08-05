import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import { useState } from 'react';

const Assignment = () => {
    const [aName, setaName] = useState('Assignment');
    const [actual, setActual] = useState(0);
    const [weight, setWeight] = useState(100);

    const grade = actual / weight;

    return (
        <div className={styles.classHeader} style={{ width: '100%' }}>
            <div className={styles.classAttrs}>
                {aName}
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
    );
}

export default Assignment;
