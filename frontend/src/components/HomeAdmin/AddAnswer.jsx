import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ADD_ANSWER } from '../../graphql/mutations'
import { Notify } from '../Notify'


function AddAnswer({ questionId }) {
  const [errorsMessage, setErrosMessage] = useState(null)
  const [completeMessage, setCompledMessage] = useState(null)
  const [answer, setAnswer] = useState('')

  const notifyCompled = message => {
    setCompledMessage(message)
    setAnswer('')
    setTimeout(() => {
      setCompledMessage(null)
    }, 3000)
  }
  const notifyErrors = message => {
    setErrosMessage(message)
    setTimeout(() => {
      setErrosMessage(null)
    }, 3000)
  }

  const [createAnswer] = useMutation(ADD_ANSWER,{
    onCompleted: (data) => {
      notifyCompled('Respuesta creada con éxito')
    },
    onError: (error) => {
      console.error(error)
      notifyErrors('Error con esta peticion, intentelo nuevamenta mas tarde!');
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('eee', answer)
    if(answer){
      createAnswer({
        variables: {
          questionId,
          answer
        }
      })
    }
  }

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }


  return (
    <><Notify errorsMessage={errorsMessage} completeMessage={completeMessage} />
    <AddAnswerContent>
      <form onSubmit={handleSubmit} >
        <textarea
          placeholder="Agregar respueta"
          type="text"
          name="answer"
          value={answer}
          onChange={handleChange}
        />
        {answer && <button type="submit">Enviar</button>}
      </form>
    </AddAnswerContent>
    </>
  )
}

export default AddAnswer

const AddAnswerContent = styled.div`
width: 95%;
margin: 0 auto;
position: relative;
padding: 0;
form{
  position: relative;
  box-sizing: border-box;
>textarea {
        box-sizing: border-box;
        padding: 10px 20px;
        border: 1px solid #0F202D;
        font-size: 16px;
        font-weight: 700;
        outline: 0;
        width: 100%;
        border-radius: 5px;
        background: #fff;
        color: #000;
        z-index:1;
      }
      >button {
  font-size: 12px;
  font-weight: 600;
  background: #0069d2;
  border: none;
  padding: 10px 20px;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  cursor: pointer;
  color: #fff;
  position: absolute;
  margin-bottom: -32px;
  bottom:0;
  right:0;
  &:hover{
    opacity: .8;
  }
}
}

`