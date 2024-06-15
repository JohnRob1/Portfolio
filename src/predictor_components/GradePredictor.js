import styles from '../predictor_styles/GradePredictor.module.css';
import global from '../portfolio_styles/Global.module.css';
import * as Images from '../portfolio_components/Global.js';

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

function ClassList(classes) {
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
                    <ClassLink
                        name='Test Class'
                    />
                    <ClassLink
                        name='Test Class'
                    />
                    <ClassLink
                        name='Test Class'
                    />
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
            </div>
        </div>
    );
}

export default function GradePredictor() {
    return (
        <div className={styles.container}>
            <h1 className={global.title}>Predict My Grades</h1>
            <ClassList />
        </div>
    );
}
