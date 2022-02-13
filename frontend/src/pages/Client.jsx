import React from 'react'
import styled from 'styled-components'
import HomeClient from '../components/homeClient'
import Profile from '../components/Profile'


function Client() {
  return (
    <HomeWrapper>
    <Profile />
    <HomeClient />
    </HomeWrapper>
  )
}

export default Client


const HomeWrapper = styled.div`
max-width: 1300px;
margin: auto;
display: flex;
flex: 1;
@media(max-width: 800px){
  flex-direction: column;
  position: relative;
}
`