import styles from '../predictor_styles/ClassList.module.css';
import global from '../portfolio_styles/Global.module.css';
import { useState } from 'react';

export default function ClassList() {
    const [classList, setClassList] = useState([]);
    const [editing, setEditing] = useState(false);

    const Class = ({ edit }) => {
        const [name, setName] = useState('Your Class');
        return (
            <div className={styles.classLink}>
                <div
                    className={styles.classAttrs}
                    contentEditable={edit}>
                    {name}
                </div>
            </div>
        );
    }

    const EditButton = () => {
        return (
            <div style={{ display: 'flex', width: '100%' }}>
                <div
                    className={global.link}
                    style={{ fontWeight: 'bolder', width: '50%', margin: '5px' }}
                    onClick={() => { setClassList([...classList, {}]) }}
                >Add Class</div>
                <div
                    className={global.link}
                    style={{
                        fontWeight: 'bolder', width: '50%', margin: '5px',
                        background: editing ? 'var(--accent)' : ''
                    }}
                    onClick={() => EditOrSaveChanges()}
                >{editing ? 'Done' : 'Edit Classes'}</div>
            </div>
        );
    }

    function EditOrSaveChanges() {
        if (editing) {
            setEditing(false);
        } else {
            setEditing(true);
        }
    }

    return (
        <div className={styles.classes}>
            <h1 className={global.title}>
                Classes
            </h1>
            <div className={styles.classLinksContainer}>
                {classList.map((_, index) => (
                    <Class
                        key={index}
                        edit={editing}
                    />
                ))}
                <EditButton />
            </div>
        </div >
    );
}
