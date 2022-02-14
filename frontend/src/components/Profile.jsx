import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';

function Profile() {
  const { removeAuth, users } = useContext(Context)

  return <ProfileContent>
    <div>
      <div>
        <img src="https://cdn.icon-icons.com/icons2/827/PNG/128/user_icon-icons.com_66546.png" alt="" />
        {users && users.role === 'client' && <button type="button">Cliente</button>}
        {users && users.role === 'admin' && <button type="button">Administrador</button>}
      </div>
      <br />
      <h4>{users.username}</h4>
      <p><b></b>Email:  {users.email} </p>
      <button onClick={removeAuth} className="session" type="button">Cerrar sesión</button>
    </div>
  </ProfileContent>;
}

export default Profile;

const ProfileContent = styled.div`
flex: 0.35;
position: relative;
overflow: hidden;
height: 30vh;
button{
        border: none;
        font-size: 14px;
        padding: 7px 12px;
        border-radius: 5px;
        font-weight: bold;
        color: #f1f2f3;
        background: #f18f01;
      }
>div{
    background-color: var(--fondo);
    padding: 20px;
    padding:20px;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    width: 29%;
    margin: 20px 20px;
    @media(max-width: 800px){
      width: 100%;
      margin: 20px 0px;
    }
    >h4{
      font-size: 20px;
      color:ver(--blue-secondary);
      b{
        color: #2a7ed3;
      }
      
    }
    >p{
      color:var(--black);
      font-weight: 600;
    }
    >div{
      display: flex;
      align-items: start;
    
      img{
        width: 70px;
        height: 70px;
        border: 2px solid #2a7ed3;
        border-radius:50%;
        margin-right:10px;
      }
      >input{
        position:absolute;
        left: 100px;
        width: 100px;
        margin-top: 5px;
        opacity: 0;
      }
    }
    >.session{
        cursor: pointer;
        margin-top:40px;
        Background: var(--blue-primary);
    }
}
@media(max-width: 800px){
  flex: 1;
  position: relative;
  >div{
    position: relative;
    padding: 20px 30px 20xp 50px;
  }
}
`