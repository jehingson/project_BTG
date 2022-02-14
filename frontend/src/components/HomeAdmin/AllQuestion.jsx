import { useQuery } from '@apollo/client'
import React from 'react'
import { All_QUESTIONS_ADMIN } from '../../graphql/queries'
import Question from './Question'


function AllQuestion() {

  const {data, error } = useQuery(
    All_QUESTIONS_ADMIN, {
    pollInterval: 2000
  })

  console.log('data', data)

  if(error) return null

  return (
    <div>
      {
        data && data.allQuestion?.map(question => <Question 
            key={question.id}
            client={question.client.username}
            question={question.question}
            questionId={question.id}
            createdAt={question.createdAt}
            petition={question.petition.name}
            answer={question.answer}
        />)
      }
    </div>
  )
}

export default AllQuestion