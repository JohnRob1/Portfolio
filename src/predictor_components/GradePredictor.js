import styles from '../predictor_styles/GradePredictor.module.css';
import global from '../portfolio_styles/Global.module.css';
import outputs from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { signIn } from 'aws-amplify/auth'
// import { generateClient } from 'aws-amplify/data';
import * as Images from '../portfolio_components/Global.js';
import '../App.css';

Amplify.configure(outputs);

function ClassLink({ name, pic }) {
    return (
        <div className={styles.classLink}>
            <img
                className={styles.classLinkPic}
                src={pic ? pic : Images.classIcon}
                alt={pic ? pic : Images.classIcon}
            />
            <div className={styles.classLinkName}>
                {name}
            </div>
        </div>
    );
}

function ClassList() {
    return (
        <div className={styles.classesOut}>
            <div className={styles.classesIn}>
                <h1 className={global.title}>
                    Classes
                </h1>
                <div className={styles.classLinkContainer}>
                    <ClassLink
                        name='Test Class'
                    />
                    <ClassLink
                        name='Test Class'
                    />
                    <ClassLink
                        name='Test Class'
                    />
                </div>
                <div className={styles.classLink}>
                    <img
                        className={styles.classAddPic}
                        src={Images.addClass}
                        alt={Images.addClass}
                    />
                </div>
            </div>
        </div>
    );
}

function Login() {
    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget
        await signIn({
            username: form.elements.username.value,
            password: form.elements.password.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' />
            <input type='submit' />
        </form>
    );
}

export default function GradePredictor() {
    // const client = generateClient(); // use this Data client for CRUDL requests

    return (
        <div className="App">
            <div className={styles.container}>
                <h1 className={global.title}>Predict My Grades</h1>
                <ClassList />
                <Login />
            </div>
        </div>
    );
}
