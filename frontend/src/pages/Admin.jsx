import React from 'react'
import Profile from '../components/Profile'
import styled from 'styled-components'
import HomeAdmin from '../components/HomeAdmin'


function Admin() {
  return (
    <HomeWrapper>
    <Profile />
    <HomeAdmin />
    </HomeWrapper>
  )
}

export default Admin

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