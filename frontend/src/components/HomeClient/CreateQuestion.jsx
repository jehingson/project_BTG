import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { Notify } from '../Notify';
import { useFormAddPost } from '../../hooks/useFormAddPost';
import Loading from '../Loading';
import { Context } from '../../context/Context';


const initialForm = {
  title: '',
  description: '',
  image: ''
}

const validationsForm = (form) => {
  let errors = {};
  if (!form.title.trim()) {
    errors.title = "El titulo es requerido"
  }
  if (form.title.trim().length > 50) {
    errors.title = "Titulo debe ser menor a 50 caracteres"
  }

  if (!form.description.trim()) {
    errors.description = "La descripción es requerida"
  }
  if (form.description.trim().length > 240) {
    errors.description = "Descripción debe ser menor de 240 caracteres"
  }
  return errors
}


function CreateQuestion() {
  const { users } = useContext(Context)
  const [images, setImages] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    errorsMessage,
    completeMessage,
    errors,
  } = useFormAddPost(initialForm, validationsForm, images, setImages)

  const hendleUpload = e => {
    const file = e.target.files[0]
    if (!file) return
    setLoading(true)
  }

  const removeImage = () => {
    setImages(null)
  }


  return <CreateQuestionContent>
    <div className="top-box">
      <Notify errorsMessage={errorsMessage} completeMessage={completeMessage} />
      <img src='https://cdn.icon-icons.com/icons2/827/PNG/128/user_icon-icons.com_66546.png' alt="" />
      <form onSubmit={handleSubmit}>
      <label>Selecciona tipo de solicitud</label>
        <select name="select">
          <option value="value1">Value 1</option>
          <option value="value2" selected>Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        {errors.title && <p className="error input">{errors.title}</p>}
        <textarea
          placeholder="Escribe tu solicitud"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && <p className="error text">{errors.description}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
    <div className="box-footer">
      <div className="inputIcon">
        <CameraIcon className="photo" />
        <input type="file" name="file" id="file-up"/>
        <p>Fotos</p>
      </div>
      <div className="inputIcon">
        <VideoCameraIcon className="video" />
        <p>Video en directo</p>
      </div>
      <div className="inputIcon">
        <EmojiHappyIcon className="active" />
        <p>Sentimientos/actividad</p>
      </div>
    </div>
  </CreateQuestionContent>;
}

export default CreateQuestion;

const CreateQuestionContent = styled.div`
  background: #efefef;
  border-radius: .25rem;
  position: relative;
  color: #fff;
  margin-top: 20px;
  padding: 0px 15px 5px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  .top-box{
    display: flex;
    padding: 20px 0;
    align-items: start;
    width: 85%;
    margin:  0 auto;
    border-bottom: 1px solid #172B3A;
    position: relative;
    >img{
      width: 70px;   
      height:70px;
      object-fit: fit;
      border-radius: 50%;
      margin-top: -5px;
      margin-left: -29px;
    }
    >form{
      z-index:0;
      box-sizing: border-box;
      margin-left: 10px;
      width: 70%;
      display: flex;
      align-items: start;
      flex-direction: column;
      position: relative;
      label{
        text-align: left;
        display: inline-block;
        width:100%;
        color: var(--blue-secondary);
        font-weight: 700;
        opacity: 0.8;
        padding: 10px 20px;
      }
      >input, >textarea, >select {
        padding: 10px 20px;
        border: 1px solid #0F202D;
        font-size: 16px;
        font-weight: 700;
        margin-left: 20px;
        outline: 0;
        width: 100%;
        border-radius: 5px;
        background: #ececff;
        color: #000;
        z-index:1;
      }
      >select{
        width: 70%;
        position: relative;

      }
      >textarea{
        margin-top: 20px;
        font-size: 18px;
      }
      >button{
        border: none;
        margin-top: 15px;
        font-size: 17px;
        padding: 5px 15px;
        border-radius: 5px;
        margin-right: -90%;
        background: #2B93D2;
        color: #ebeced;
        font-weight: 700;
        cursor: pointer;
        &:hover{
          opacity: .8;
        }
      }
      .error{
        margin-top: 55px;
        position: absolute;
        font-weight: 400;
        color: rgb(214, 66, 146);
        font-size: 14px;
        &.input{
          left: 20px;
          top: 25px;
        }
        &.text{
          bottom: 50px;
          left: 20px;
        }
      }
     
    }
  }
  .box-footer{
    width: 80%;
    margin: auto;
    align-items: center;
    display: flex;
    position: relative;
    >div{
      display: flex;
      width: 100%;;
      align-items: center;
     .video, .photo, .active{
       width: 35px;
       color: #8b959c;
       padding: 5px;
       border-radius: 5px;
     } 
     p{
       font-size:13px;
       color: #8b959c;
       @media (max-width: 480px){
        display: none;
       }
     }
     >input{
       width: 20px;
       height: 20px;
       opacity: 0;

       position: absolute;
       top: 12px;
       left: 11px;
       cursor: pointer;
       }
     }
    }
`