import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  register(
    username: $username,
    email: $email
    password: $password
  )
}
`
export const LOGIN = gql`
mutation loginSession($email: String!, $password: String!) {
  login(
    email: $email,
    password: $password) {
    token
    id
    username
    email
    role
  }
}
`

export const UPLOAD_FILE = gql`
mutation uploadImages($file: Upload!){
  uploadFile(file: $file){
    url
  }
}
`
export const UPDATE_USER = gql`
    mutation updateUser($username: String!, $photo: String!) {
    updateUser(
    username: $username,
    photo: $photo
  ) {
    uid
    username
    photo
    email
  }
}
`
export const CREATE_QUESTION = gql`
mutation addQuestion($petitionId: ID!, $question: String!){
  createQuestion(
    petitionId: $petitionId,
    question: $question
  )
}
`