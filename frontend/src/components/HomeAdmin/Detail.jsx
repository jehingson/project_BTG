import React from 'react'
import styled from 'styled-components'
import Answer from './Answer'


function Detail({petition, question, answer, setDetail, date}) {
  return (
    <DetailContent>
        
        <div>
        <p className="closes" onClick={() => setDetail(false)}>x</p>
            <h5>Detalle de la solicitud</h5>
            <h4>{petition}</h4>
            <span>{date.toLocaleString()}</span>
            <p className="question">{question}</p>
            <div>
            {answer.length > 0 && answer.map((answ) => <Answer
                    key={answ.id}
                    admin={answ.admin.username}
                    answer={answ.answer}
                />)}
            </div>
        </div>
    </DetailContent>
  )
}

export default Detail
const DetailContent = styled.div`
width: 100%;
  height: 100%;
  position: fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  >div{
    max-width:600px;
    min-height: 200px;
    width: 100%;
    padding: 30px;
    background-color: white;
    display:flex;
    flex-direction: column;
    align-items:center;;
    text-align: center;
    background-color: #ffffd7;
    border-radius: 5px;
    opacity: 1;
    >.closes{
        padding: 5px 10px;
        border-radius: 50%;
        background-color: #fff;
        color: #000;
        font-weight: bold;
        opacity: .9; 
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
        &:hover{
           opacity: .7; 
        }
    }
    >h5{
      font-size: 16px;
      color: #2a7ed3;
      padding: 10px;
    }
    >h4{
 color: #000040;
 opacity: .8;
}
>span{
    font-weight: 800;
    font-size: 10px;
    color: #000;
    opacity: .6;
}
.question{
    border-radius: .15rem;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    font-weight: 700;
    color: #000;
    opacity: .7;
    width: 90%;
}
>div{
    padding: 10px;
}
    
  }
`