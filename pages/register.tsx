import { RegisterInputs } from '../constants/elements/inputs'

import AuthForm from '../components/AuthForm'
import AuthPage from '../components/AuthPage'

export default function Register() {
    return (
        <div>
            <AuthPage>
                <AuthForm inputs={RegisterInputs} type='register' />
            </AuthPage>
        </div>
    )
}