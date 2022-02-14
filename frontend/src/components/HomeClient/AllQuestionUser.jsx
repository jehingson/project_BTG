import { useQuery } from '@apollo/client'
import React from 'react'
import { All_QUESTIONS_CLIENT } from '../../graphql/queries'
import Question from './Question'



function AllQuestionUser() {

  const {data, error } = useQuery(All_QUESTIONS_CLIENT, {
    pollInterval: 2000
  })

  if(error) return null
  
  console.log('question all', data)

  return (
    <div>
      {
        data && data.allQuestionClient?.map(question => <Question 
            key={question.id}
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

export default AllQuestionUser