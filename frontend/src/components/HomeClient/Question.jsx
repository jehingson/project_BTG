import React, { useState } from 'react'
import styled from 'styled-components'
import Answer from './Answer'
import Detail from './Detail'


function Question({ question, createdAt, petition, answer }) {

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
        <QuestionContent onClick={() => setDetail(true)}>
        
            
            <h4>{petition}</h4>
            <span>{date.toLocaleString()}</span>

            <p>{question}</p>
            <div>
                {answer.length > 0 && answer.map((answ) => <Answer
                    key={answ.id}
                    admin={answ.admin.username}
                    answer={answ.answer}
                />)}
            </div>
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
&:hover{
    opacity: .7;
    cursor: pointer;
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
>p{
    border-radius: .15rem;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    font-weight: 700;
    color: #000;
    opacity: .7;
}
>div{
    padding: 10px;
}
`