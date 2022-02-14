import React from 'react'
import styled from 'styled-components'
import AllQuestion from './AllQuestion'


function HomeAdmin() {
  return (
    <AdminContent>
      <AllQuestion />
    </AdminContent>
  )
}

export default HomeAdmin

const AdminContent = styled.div`
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