import React, { useState } from 'react'
import styled from 'styled-components'
import Answer from './Answer'
import AddAnswer from './AddAnswer'
import Detail from './Detail'


function Question({ question, questionId, createdAt, petition, answer, client }) {

    const [detail, setDetail] = useState(false)

    const date = new Date(parseInt(createdAt))
    return (
        <>{detail && <Detail 
            setDetail={setDetail}
            date={date}
            petition={petition} 
            question={question}
            answer={answer}
            />}
        <QuestionContent>
            <h4>{petition}</h4>
            <span>{date.toLocaleString()}</span>
            <div>
                <p>
                   <b>Cliente:</b> {client}
                </p>
            </div>
            <p onClick={() => setDetail(true)}>{question}</p>
            <div className="answer" onClick={() => setDetail(true)}>
                {answer.length > 0 && answer.map((answ) => <Answer
                    key={answ.id}
                    admin={answ.admin.username}
                    answer={answ.answer}
                />)}
            </div>
            <AddAnswer questionId={questionId} />
        </QuestionContent>
        </>
    )
}

export default Question

const QuestionContent = styled.div`
padding: 30px 20px;
margin: 10px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
background-color: #f2f2ff;

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
>p{
    border-radius: .15rem;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    font-weight: 700;
    color: #000;
    opacity: .8;
    &:hover{
    opacity: .6;
    cursor: pointer;
}
    
}
>div{
    padding: 10px;
}
.answer{
    &:hover{
    opacity: .6;
    cursor: pointer;
}
}
`