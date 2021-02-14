import InputT from '../../types/Input'

export const LoginInputs: InputT[] = [{
    name: 'email',
    type: 'text'
}, {
    name: 'password',
    type: 'password'
}]

export const RegisterInputs: InputT[] = [{
    name: 'email',
    type: 'text'
}, {
    name: 'password',
    type: 'password'
}, {
    name: 'password-confirm',
    type: 'password'
}]