// import { capitalizeFirstLetter } from '../functions/helpers'

import { createUser, readUser } from '../graphql/fetchers/users'
import { CREATE_USER_QUERY, READ_USER_QUERY } from '../graphql/queries/users'

import UserT from '../types/User'

import Button from '../components/Button'
import styles from '../styles/AuthForm.module.css'
import { useState } from 'react'

type Props = {
    inputs: string[]
    type: 'login' | 'register'
}

export default function AuthForm({ inputs, type }: Props) {
    // TODO: See whether the type of the state below could be narrowed by removing the any.
    const [user, setUser] = useState<UserT | any>({
        email: '',
        password: '',
        ['password-confirm']: ''
    })

    const authenticateUser = async (event: MouseEvent) => {
        event.preventDefault()
        console.log(user)
        if (type === 'login') {
            const data = await readUser(READ_USER_QUERY, user.email)
            console.log(data)
        } else {
            const data = await createUser(CREATE_USER_QUERY, { email: user.email, password: user.password, passwordConfirm: user['password-confirm'] })
            console.log(data)
        }
    }

    const editState = (key: string, value: string) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    return (
        <form className={styles.authForm}>
            <h3 role='title'>{type}</h3>
            {inputs.map(input => (
                <input name={input} onChange={event => editState(input, event.target.value)} placeholder={input} value={user[input]}></input>
            ))}
            <Button backgroundColor='#2da562' color='white' onClick={authenticateUser}>
                <h3>{type}</h3>
            </Button>
        </form>
    )
}