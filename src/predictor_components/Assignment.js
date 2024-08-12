import styles from '../predictor_styles/Assignment.module.css';
import React, { useState } from 'react';

function calcGrade(actual, total) {
    const newGrade = parseFloat((actual / total) * 100).toFixed(2);
    return (newGrade - Math.floor(newGrade) === 0)
        ? parseFloat(newGrade).toFixed(0)
        : newGrade;
}

function calcActualFromGrade(grade, total) {
    const t = (total === 0) ? 100 : total
    const newActual = parseFloat((t * grade) / 100).toFixed(2);
    return (newActual - Math.floor(newActual) === 0)
        ? parseFloat(newActual).toFixed(0)
        : newActual;
}

function calcParent(newVal, prevVal, parentVal) {
    const newParentVal = parseFloat(
        parseFloat(parentVal) + parseFloat(newVal - prevVal)
    ).toFixed(2);
    return (newParentVal - Math.floor(newParentVal) === 0)
        ? parseFloat(newParentVal).toFixed(0)
        : newParentVal;
}

const Assignment = ({ id, name, actual, total, setParent, remove }) => {
    const newGrade = calcGrade(actual, total);
    const [attrs, setAttrs] = useState({
        aname: name,
        aactual: actual,
        atotal: total,
        agrade: isNaN(newGrade) ? 0 : newGrade
    });

    return (
        <div className={styles.assignment} style={{ width: '100%' }}>
            <input
                className={styles.attrs}
                type={'text'}
                value={attrs.aname}
                onChange={e => setAttrs(prev => ({
                    ...prev,
                    aname: e.target.value
                }))}
            />
            <div style={{ display: 'flex' }}>
                <input
                    className={styles.attrs}
                    type={'number'}
                    value={attrs.aactual}
                    onChange={e => {
                        const newVal = e.target.value;
                        setParent(prev => {
                            const newActual = calcParent(newVal, attrs.aactual, prev.actual);
                            return ({
                                ...prev,
                                actual: newActual,
                                grade: calcGrade(newActual, prev.total)
                            });
                        });
                        setAttrs(prev => {
                            return ({
                                ...prev,
                                aactual: newVal,
                                agrade: calcGrade(newVal, prev.atotal)
                            });
                        });
                    }}
                />
                <input
                    className={styles.attrs}
                    type={'number'}
                    value={attrs.atotal}
                    onChange={e => {
                        const newVal = e.target.value;
                        setParent(prev => {
                            const newTotal = calcParent(newVal, attrs.atotal, prev.total);
                            return ({
                                ...prev,
                                total: newTotal,
                                grade: calcGrade(prev.actual, newTotal)
                            });
                        });
                        setAttrs(prev => {
                            return ({
                                ...prev,
                                atotal: newVal,
                                agrade: calcGrade(prev.aactual, newVal)
                            });
                        })
                    }}
                />
                <input
                    className={styles.attrs}
                    type={'number'}
                    value={attrs.agrade}
                    onChange={e => {
                        const newVal = e.target.value;
                        const newActual = calcActualFromGrade(newVal, attrs.atotal);
                        setAttrs(prev => ({
                            ...prev,
                            aactual: newActual,
                            agrade: newVal
                        }));
                        setParent(prev => {
                            const newParentActual = calcParent(newActual, attrs.aactual, prev.actual);
                            return ({
                                ...prev,
                                actual: newParentActual,
                                grade: calcGrade(newParentActual, prev.total)
                            });
                        });
                    }}
                />
                <div
                    className={styles.deleteButton}
                    onClick={() => remove(id, attrs.aactual, attrs.atotal)}>
                    Delete
                </div>
            </div>
        </div>
    );
};

export default Assignment;
