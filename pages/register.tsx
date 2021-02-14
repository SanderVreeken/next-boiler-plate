import { RegisterInputs } from '../constants/elements/inputs'

import AuthForm from '../components/AuthForm'
import AuthPage from '../components/AuthPage'
import styles from '../styles/Register.module.css'

export default function Register() {
    return (
        <div className={styles.register}>
            <AuthPage>
                <AuthForm inputs={RegisterInputs} type='register' />
            </AuthPage>
        </div>
    )
}