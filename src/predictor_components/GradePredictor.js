import styles from '../predictor_styles/GradePredictor.module.css';
import global from '../portfolio_styles/Global.module.css';
import outputs from "../amplify_outputs.json";
import { Authenticator, useTheme, View } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';

Amplify.configure(outputs);

function ClassList() {
    const Class = () => {
        return (
            <div className={styles.classLink}>
                <input className={styles.classAttrs} placeholder="Your Class" />
            </div>
        );
    }

    const [classList, setClassList] = useState([]);

    const addClass = () => {
        setClassList(classList.concat(<Class key={classList.length} />));
    }

    return (
        <div className={styles.classes}>
            <h1 className={global.title}>
                Classes
            </h1>
            <div className={styles.classLinksContainer}>
                {classList}
                <div
                    className={global.link}
                    style={{ fontWeight: 'bolder', width: '100%' }}
                    onClick={addClass}
                >
                    Add Class
                </div>
            </div>
        </div >
    );
}


export default function GradePredictor() {

    const header = {
        Header() {
            const { tokens } = useTheme();

            return (
                <View textAlign="center" padding={tokens.space.large}>
                    <h1 style={{ color: 'var(--tertiary)' }}>Save Your Classes!</h1>
                </View>
            );
        }
    }

    return (
        <div className="App">
            <div className={styles.main}>
                <ClassList />
                <Authenticator components={header} />
            </div>
        </div>
    );
}
