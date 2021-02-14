import AuthForm from '../components/AuthForm'
import AuthPage from '../components/AuthPage'
import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.login}>
            <AuthPage>
                <AuthForm inputs={['email', 'password']} type='login' />
            </AuthPage>
        </div>
    )
}