import { LoginInputs } from '../constants/elements/inputs'

import AuthForm from '../components/AuthForm'
import AuthPage from '../components/AuthPage'

export default function Login() {
    return (
        <div>
            <AuthPage>
                <AuthForm inputs={LoginInputs} type='login' />
            </AuthPage>
        </div>
    )
}