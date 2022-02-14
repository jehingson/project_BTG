import React from 'react'
import styled from 'styled-components'

function Answer({admin,  answer}) {
  return (
    <AnswerContent>
        <p><b>Respuesta:</b> <br/> {answer} </p>
        <br/>
        <h6>Administrador: {admin}</h6>
    </AnswerContent>
  )
}

export default Answer

const AnswerContent = styled.div`
    margin-top:-10px;
    margin-bottom:15px;
    padding: 10px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    opacity: .7;

`