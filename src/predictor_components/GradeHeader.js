import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import React, { useState } from 'react';

const Header = ({ id, name, actual, total, remove, update }) => {
    const Attribute = ({ val, attr }) => {
        const [a, setAttr] = useState(val);
        return (
            <input
                className={styles.classAttrs}
                type={attr === 'name' ? 'text' : 'number'}
                value={a}
                onChange={e => {
                    const newVal = (e.target.value === NaN)
                        ? 0
                        : e.target.value;
                    setAttr(newVal);
                    update(id, attr, newVal);
                }}
            />
        );
    }

    return (
        <div className={styles.classHeader} style={{ width: '100%' }}>
            <Attribute val={name} attr='name' />
            <div style={{ display: 'flex' }}>
                <Attribute val={actual} attr='actual' />
                <Attribute val={total} attr='total' />
                <Attribute val={0} attr='grade' />
                <div
                    className={global.link}
                    style={{ color: 'var(--primary)', margin: '0px' }}
                    onClick={() => remove(id)}>
                    Delete
                </div>
            </div>
        </div>
    );
};

export default Header;
