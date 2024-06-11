import styles from '../styles/GradePredictor.module.css';
import { defineAuth } from "@aws-amplify/backend"
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

export const auth = defineAuth({
    loginWith: {
        externalProviders: {
            brightSpace: {
            },
            callbackUrls: [
                'http://localhost:3000/',
                'https://johnrobinson.com/'
            ],
            logoutUrls: ['http://localhost:3000/', 'https://johnrobinson.com/']
        }
    },
})

export default function GradePredictor() {
    return (<>
        <Authenticator>
            {({ signOut }) => (
                <main className={styles.main}>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    </>);
}
