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

export const CREATE_QUESTION = gql`
mutation addQuestion($petitionId: ID!, $question: String!){
  createQuestion(
    petitionId: $petitionId,
    question: $question
  )
}
`

export const ADD_ANSWER = gql`
mutation createAnswer($questionId: ID!, $answer: String!){
  addAnswer(
    questionId: $questionId,
    answer: $answer
  )
}
`