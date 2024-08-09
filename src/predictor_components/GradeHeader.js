import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';

const Header = ({ id, name, actual, total, remove }) => {
    const grade = actual / total;
    console.log(id);

    return (
        <div className={styles.classHeader} style={{ width: '100%' }}>
            <div className={styles.classAttrs}>
                {name}
            </div>
            <div style={{ display: 'flex' }}>
                <div className={styles.classAttrs}>
                    {(actual + ' / ' + total)}
                </div>
                <div className={styles.classAttrs}>
                    {grade ? grade : 0 + '%'}
                </div>
                {id
                ?   <div
                        className={global.link}
                        style={{ color: 'var(--primary)', margin: '0px' }}
                        onClick={() => remove(id)}>
                        Delete
                    </div>
                :   <></>
                }
            </div>
        </div>
    );
}

export default Header;
