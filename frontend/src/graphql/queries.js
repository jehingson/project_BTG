import { gql } from '@apollo/client';


export const All_QUESTIONS_CLIENT = gql`
 query{
    allQuestionClient{
      id
      question
      createdAt
      client{
        id
      }
      petition{
        id
        name
      }
      answer{
        id
        answer
        admin{
          id
          username
        }
      }
  }
  }
`

export const FETCH_USER = gql`
 query {
   getUser{
        id
        username
        email
        role
      }
  }
`
export const FETCH_PETITION = gql`
 query {
   allPetition{
        id
        name
      }
  }
`
