import { useState } from 'react'

import { createUser, readUser } from '../graphql/fetchers/users'
import { CREATE_USER_QUERY, READ_USER_QUERY } from '../graphql/queries/users'

import StyleConstants from '../constants/styles'
import InputT from '../types/Input'

import { updateState } from '../functions/state'

import Button from '../components/Button'
import styles from '../styles/AuthForm.module.css'

type Props = {
    inputs: InputT[]
    type: 'login' | 'register'
}

export default function AuthForm({ inputs, type }: Props) {
    // TODO: See whether the type of the state below could be narrowed by removing the any.
    const [user, setUser] = useState<any>({
        email: '',
        password: '',
        ['password-confirm']: ''
    })

    const authenticateUser = async (event: MouseEvent) => {
        event.preventDefault()
        if (type === 'login') {
            const data = await readUser(READ_USER_QUERY, user.email)
            console.log(data)
        } else {
            const data = await createUser(CREATE_USER_QUERY, { email: user.email, password: user.password, passwordConfirm: user['password-confirm'] })
            console.log(data)
        }
    }

    return (
        <form className={styles.authForm}>
            <h3 role='title'>{type}</h3>
            {inputs.map(input => (
                <input name={input.name} onChange={event => updateState(user, setUser, input.name, event.target.value)} placeholder={input.name} type={input.type} value={user[input.name]}></input>
            ))}
            <Button backgroundColor={StyleConstants['--main-highlight-color']} color={StyleConstants['--second-font-color']} onClick={authenticateUser}>
                <h3>{type}</h3>
            </Button>
        </form>
    )
}