import styles from '../predictor_styles/GradePredictor.module.css';
import global from '../portfolio_styles/Global.module.css';
import outputs from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { getCurrentUser, signIn, signUp } from 'aws-amplify/auth'
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
        <div className={global.container}>
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
            <div className={global.link} style={{ fontWeight: 'bolder' }}>
                Add Class
            </div>
        </div >
    );
}

// TODO: validate inputs
function Login() {
    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        await signIn({
            username: form.elements.username.value,
            password: form.elements.password.value,
        })
    }

    return (
        <div className={global.container}>
            <form onSubmit={handleSubmit} className={styles.login}>
                <label> Want to save your data? </label>
                <div className={styles.loginButtons}>
                    <div className={global.link}>Sign In</div>
                    <div className={global.link}>Sign Up</div>
                </div>
                <input type='text' id='username' name='username' placeholder='Username' />
                <input type='password' id='password' name='password' placeholder='Password' />
                <input type='submit' id='submit' />
            </form>
        </div>
    );
}

export default function GradePredictor() {
    return (
        <div className="App">
            <div className={styles.main}>
                <h1 className={global.title}>Predict My Grades</h1>
                <ClassList />
                <Login />
            </div>
        </div>
    );
}
