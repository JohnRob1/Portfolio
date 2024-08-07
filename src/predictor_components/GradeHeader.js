import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';

const GradeHeader = ({ name, actual, total, onChange }) => {
    const grade = actual / total;

    return (
        <div className={styles.classHeader} style={{ width: '100%' }}>
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
    );
}

export default GradeHeader;
