import { LoginInputs } from '../constants/elements/inputs'

import AuthForm from '../components/AuthForm'
import AuthPage from '../components/AuthPage'
import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.login}>
            <AuthPage>
                <AuthForm inputs={LoginInputs} type='login' />
            </AuthPage>
        </div>
    )
}