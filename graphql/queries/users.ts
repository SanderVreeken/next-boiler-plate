export const CREATE_USER_QUERY = /* GraphQL */ `
    mutation($email: String!, $password: String!, $passwordConfirm: String!) {
        createUser(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
            token
        }
    }
`

export const READ_USER_QUERY = /* GraphQL */ `
    query($email: String!) {
        readUser(email: $email) {
            _id
            email
        }
    }
`