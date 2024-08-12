import styles from '../predictor_styles/GradePredictor.module.css';
import outputs from "../amplify_outputs.json";
import ClassList from './Classes.js';
import { Authenticator, useTheme, View } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';

Amplify.configure(outputs);

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
