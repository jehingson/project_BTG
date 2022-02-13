import React from 'react'
import styled from 'styled-components';
import AllQuestion from './AllQuestion'
import CreateQuestion from './CreateQuestion'


function HomeClient() {
  return (
    <ClientContent>
      <CreateQuestion />
      <AllQuestion />
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
  flex: 1;
}
`