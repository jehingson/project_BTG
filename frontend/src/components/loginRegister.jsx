import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormLogin } from '../hooks/useFormLogin';
import { Notify } from './Notify';

const initialForm = {
    name: '',
    email: '',
    password: '',
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
        errors.name = "El nombre y apellido es requerido"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo nombre y apellido debe ser completo"
    }
    if (form.name.trim().length >25){
        "Este campo debe ser menor a 25 caracteres"
    } 

    if (!form.email.trim()) {
        errors.email = "El email es requerido"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo email no es correcto"
    }

    if (!form.password.trim()) {
        errors.password = "La contraseña es requerida"
    } else if (parseInt(form.password.trim()) < 6) {
        errors.password = "Contraseña debe ser mayor de 6 caracteres"
    }

    return errors
}


function LoginRegister() {
    const [register, setRegister] = useState(false)
    const {
        form,
        handleChange,
        handleBlur,
        handleSubmit,
        errorsMessage,
        completeMessage,
        errors,
        loading,
    } = useFormLogin(initialForm, validationsForm, register)

    return <ContainerLogin>
        <form  onSubmit={handleSubmit}>
        <Notify errorsMessage={errorsMessage} completeMessage={completeMessage} />
            {
                register ? (
                    <><h5>Registrar nuevo usuario</h5>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder='Escribe tu nombre apellido'
                                required
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                    </>
                ) : <h5>Iniciar Sesión</h5>
            }
            <div>
                <input
                    type="text"
                    name="email"
                    placeholder='Escribe tu nombre email'
                    required
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                 {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='Escribe tu nombre contraseña'
                    required
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br />
            <button type="submit">{register ? 'Continuar' : 'Iniciar Sesión' }</button>
            <br/>
                {
                    register ?
                        <p> ¿Ya eres mienbro de BTG? <b onClick={() => {setRegister(false)}}>Iniciar sesión</b></p> : <p> ¿Quieres ser parte de BTG? <b onClick={() => setRegister(true)}>Unirse ahora </b></p>
                }
        </form>
    </ContainerLogin>;
}

export default LoginRegister;

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    >form{
    background: var(--fondo);
    width: 80%;
    margin: 10% auto;
    padding: 30px;
    max-width: 600px;
    border-radius: 4px;

    >h5{
    font-size: 18px;
    font-weight: 500;
    max-width: 600px;
    margin: auto;
    font-weight: 700;
    padding: 10px 25px;
    color: var(--blue-secondary);
    height: 100%;
    }
    >div{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-height: 100px;
      label{
        font-size: 14px;
        font-weight: 600;
        color: #414042;
        margin-left: 10px;
      }
      input{
        border-radius: .25rem;
        border: 1px solid var(--white);
        background-color: #fff;
        color: var(--blue-secundary);
        padding: .75rem;
        display: block;
        outline: none;
        font-size:1rem;
        line-height: 1;
      }
      .error{
        display: block;
        position: absolute;
        margin-top: 55px;
        font-weight: 400;
        color: var(--red-primary);
        font-size: 12px;
        font-weight: 500;
      }
    }
    button{
      width: 100%;
      padding: 10px;
      background-color: var(--blue-primary);
      border-radius: .25rem;
      outline: none;
      border: none;
      cursor: pointer;
      opacity: .8;
      color: white;
      font-size: 16px;
      &:hover{
        opacity: .5;
      }
    }
        p{
        margin-top: 20px;
        display: flex;
        justify-content: right;
        color: var(--black);
        line-height: 14px;
        font-weight: 600;
        letter-spacing: 0.53px;
        @media(max-width: 410px){
            font-size: 12px;
        }
       
        b{
        cursor: pointer;
         padding-left: 10px;
         color: var(--green-primary);  
        }
        
    }
    }

`
