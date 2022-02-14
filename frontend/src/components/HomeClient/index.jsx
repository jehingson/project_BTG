import React from 'react'
import styled from 'styled-components';
import AllQuestionUser from './AllQuestionUser'
import CreateQuestion from './CreateQuestion'


function HomeClient() {
  
  return (
    <ClientContent>
      <CreateQuestion />
      <AllQuestionUser />
    </ClientContent>
  )
}

export default HomeClient

const ClientContent = styled.div`
flex: .5;
margin: auto;
overflow-y: auto;
@media(max-width: 1000px){
  flex: .6;
}
@media(max-width: 800px){
  display: inline-block;
  width: 95%;
}
`