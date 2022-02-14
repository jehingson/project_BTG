var U=Object.defineProperty,j=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var q=(o,t,n)=>t in o?U(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,S=(o,t)=>{for(var n in t||(t={}))_.call(t,n)&&q(o,n,t[n]);if(Q)for(var n of Q(t))H.call(t,n)&&q(o,n,t[n]);return o},N=(o,t)=>j(o,O(t));import{r as G,a as c,j as e,g as f,s as p,b as s,F as v,u as A,c as k,C as V,V as W,E as Z,R as $,H as K,A as Y,d as J,I as X,f as ee,e as te,h as oe}from"./vendor.bcd745dc.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};ie();const y=G.createContext({}),ne=({children:o})=>{const[t,n]=c.exports.useState(()=>window.sessionStorage.getItem("token")),[r,i]=c.exports.useState({}),a={users:r,isAuth:t,setUser:i,activateAuth:d=>{n(!0),window.sessionStorage.setItem("token",d.token),i(d)},removeAuth:()=>{n(!1),i({}),window.sessionStorage.removeItem("token"),window.location.reload()}};return e(y.Provider,{value:a,children:o})};var T={Provider:ne,Consumer:y.Consumer};const re=f`
 query {
   getUser{
        id
        username
        email
        role
      }
  }
`,ae=f`
 query {
   allPetition{
        id
        name
      }
  }
`,se=f`
 query{
    allQuestionClient{
      id
      question
      createdAt
      client{
        id
      }
      petition{
        id
        name
      }
      answer{
        id
        answer
        admin{
          id
          username
        }
      }
  }
  }
`,de=f`
 query{
    allQuestion{
      id
      question
      createdAt
      client{
        id
        username
      }
      petition{
        id
        name
      }
      answer{
        id
        answer
        admin{
          id
          username
        }
      }
  }
  }
`;function M({admin:o,answer:t}){return s(le,{children:[s("p",{children:[e("b",{children:"Respuesta:"})," ",e("br",{})," ",t," "]}),e("br",{}),s("h6",{children:["Administrador: ",o]})]})}const le=p.div`
    margin-top:-10px;
    margin-bottom:15px;
    padding: 10px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    opacity: .7;

`;function ce({petition:o,question:t,answer:n,setDetail:r,date:i}){return e(pe,{children:s("div",{children:[e("p",{className:"closes",onClick:()=>r(!1),children:"x"}),e("h5",{children:"Detalle de la solicitud"}),e("h4",{children:o}),e("span",{children:i.toLocaleString()}),e("p",{className:"question",children:t}),e("div",{children:n.length>0&&n.map(a=>e(M,{admin:a.admin.username,answer:a.answer},a.id))})]})})}const pe=p.div`
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
`;function ue({question:o,createdAt:t,petition:n,answer:r}){const[i,a]=c.exports.useState(!1),d=new Date(parseInt(t));return s(v,{children:[i&&e(ce,{setDetail:a,date:d,petition:n,question:o,answer:r}),s(me,{onClick:()=>a(!0),children:[e("h4",{children:n}),e("span",{children:d.toLocaleString()}),e("p",{children:o}),e("div",{children:r.length>0&&r.map(l=>e(M,{admin:l.admin.username,answer:l.answer},l.id))})]})]})}const me=p.div`
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
`;function xe(){var n;const{data:o,error:t}=A(se,{pollInterval:2e3});return t?null:(console.log("question all",o),e("div",{children:o&&((n=o.allQuestionClient)==null?void 0:n.map(r=>e(ue,{question:r.question,questionId:r.id,createdAt:r.createdAt,petition:r.petition.name,answer:r.answer},r.id)))}))}const F=({errorsMessage:o,completeMessage:t})=>o?e(he,{children:o}):t?e(ge,{children:t}):null,he=p.div`
    max-width: 500px;
    width: 90%;
    margin: 20px auto;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    transition: all .3s ease-in-out;
    background-color: #F1A5A2;
    color: #F9E6E6;
    border-radius: .25rem;
    z-index: 999;
`,ge=p.div`
    max-width: 500px;
    z-index: 999;
    width: 90%;
    margin: 20px auto;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    transition: all .3s ease-in-out;
    background-color: #1EAC73;
    color: #D7F8CE;
    border-radius: .25rem;
`,fe=f`
mutation createUser($username: String!, $email: String!, $password: String!) {
  register(
    username: $username,
    email: $email
    password: $password
  )
}
`,be=f`
mutation loginSession($email: String!, $password: String!) {
  login(
    email: $email,
    password: $password) {
    token
    id
    username
    email
    role
  }
}
`,we=f`
mutation addQuestion($petitionId: ID!, $question: String!){
  createQuestion(
    petitionId: $petitionId,
    question: $question
  )
}
`,ve=f`
mutation createAnswer($questionId: ID!, $answer: String!){
  addAnswer(
    questionId: $questionId,
    answer: $answer
  )
}
`;function ye(){const[o,t]=c.exports.useState(null),[n,r]=c.exports.useState(null),{data:i=[]}=A(ae),[a,d]=c.exports.useState(""),[l,u]=c.exports.useState(""),[g,b]=c.exports.useState(!1),w=x=>{r(x),d(""),u(""),setTimeout(()=>{r(null)},3e3)},h=x=>{t(x),setTimeout(()=>{t(null)},3e3)},[E]=k(we,{onCompleted:x=>{console.log("ee",x),w("Solicitud creada con \xE9xito")},onError:x=>{console.error(x),h("Error con esta peticion, intentelo nuevamenta mas tarde!")}}),I=x=>{d(x.target.value)},C=x=>{u(x.target.value)};return s(Ce,{children:[s("div",{className:"top-box",children:[e(F,{errorsMessage:o,completeMessage:n}),e("img",{src:"https://cdn.icon-icons.com/icons2/827/PNG/128/user_icon-icons.com_66546.png",alt:""}),s("form",{onSubmit:x=>{x.preventDefault(),b(!1),a&&l&&l.length<300?(console.log("id",a,l),E({variables:{question:l,petitionId:a}})):b(!0)},children:[e("label",{children:"Selecciona tipo de solicitud"}),i.allPetition&&s("select",{name:"select",onChange:I,value:a,children:[e("option",{value:"",children:"Seleccionar"}),e("option",{value:i.allPetition[0].id,children:"Petici\xF3n"}),e("option",{value:i.allPetition[1].id,children:"Queja"}),e("option",{value:i.allPetition[2].id,children:"Reclamo"})]}),g&&!a&&e("p",{className:"error input",children:"El tipo de solicitud es requerido"}),e("textarea",{placeholder:"Escribe tu solicitud",type:"text",name:"description",value:l,onChange:C}),g&&!l&&e("p",{className:"error text",children:"La description de tu solicitud es requerido"}),g&&l.length>300&&e("p",{className:"error text",children:"La description debe tener max 300 caracteres"}),e("br",{}),e("button",{type:"submit",children:"Enviar"})]})]}),s("div",{className:"box-footer",children:[s("div",{className:"inputIcon",children:[e(V,{className:"photo"}),e("p",{children:"Fotos"})]}),s("div",{className:"inputIcon",children:[e(W,{className:"video"}),e("p",{children:"Video en directo"})]}),s("div",{className:"inputIcon",children:[e(Z,{className:"active"}),e("p",{children:"Sentimientos/actividad"})]})]})]})}const Ce=p.div`
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
`;function Se(){return s(ke,{children:[e(ye,{}),e(xe,{})]})}const ke=p.div`
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
`;function B(){const{removeAuth:o,users:t}=c.exports.useContext(y);return e(Ae,{children:s("div",{children:[s("div",{children:[e("img",{src:"https://cdn.icon-icons.com/icons2/827/PNG/128/user_icon-icons.com_66546.png",alt:""}),t&&t.role==="client"&&e("button",{type:"button",children:"Cliente"}),t&&t.role==="admin"&&e("button",{type:"button",children:"Administrador"})]}),e("br",{}),e("h4",{children:t.username}),s("p",{children:[e("b",{}),"Email:  ",t.email," "]}),e("button",{onClick:o,className:"session",type:"button",children:"Cerrar sesi\xF3n"})]})})}const Ae=p.div`
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
`;function Ee(){return s(Ie,{children:[e(B,{}),e(Se,{})]})}const Ie=p.div`
max-width: 1300px;
margin: auto;
display: flex;
flex: 1;
@media(max-width: 800px){
  flex-direction: column;
  position: relative;
}
`,ze={name:"",email:"",password:""},Ne=(o,t,n)=>{const{activateAuth:r}=c.exports.useContext(y),[i,a]=c.exports.useState(o),[d,l]=c.exports.useState({}),[u,g]=c.exports.useState(!1),[b,w]=c.exports.useState(null),[h,E]=c.exports.useState(null),I=m=>{E(m),a(ze),setTimeout(()=>{window.location.reload()},3400)},C=m=>{w(m),setTimeout(()=>{w(null)},3e3)},[L]=k(fe,{onCompleted:m=>{I("Bienvenido a BTG! ahora puedes iniciar  sesi\xF3n")},onError:m=>{C(m.graphQLErrors[0].message)}}),[x]=k(be,{onCompleted:m=>{const z=m.login;r(S({},z))},onError:m=>{C(m.graphQLErrors[0].message)}}),D=m=>{const{name:z,value:R}=m.target;a(N(S({},i),{[z]:R}))};return{form:i,errors:d,loading:u,errorsMessage:b,handleChange:D,handleBlur:m=>{D(m),l(t(i))},handleSubmit:m=>{if(m.preventDefault(),l(t(i)),g(!0),!n&&!d.email&&!d.password&&x({variables:{email:i.email,password:i.password}}),Object.keys(d).length===0)n&&L({variables:{username:i.name,email:i.email,password:i.password}}),setTimeout(()=>{g(!1)},[5e3]);else return},completeMessage:h}},$e={name:"",email:"",password:""},Fe=o=>{let t={},n=/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,r=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;return o.name.trim()?n.test(o.name.trim())||(t.name="El campo nombre y apellido debe ser completo"):t.name="El nombre y apellido es requerido",o.name.trim().length>25,o.email.trim()?r.test(o.email.trim())||(t.email="El campo email no es correcto"):t.email="El email es requerido",o.password.trim()?parseInt(o.password.trim())<6&&(t.password="Contrase\xF1a debe ser mayor de 6 caracteres"):t.password="La contrase\xF1a es requerida",t};function Le(){const[o,t]=c.exports.useState(!1),{form:n,handleChange:r,handleBlur:i,handleSubmit:a,errorsMessage:d,completeMessage:l,errors:u,loading:g}=Ne($e,Fe,o);return e(De,{children:s("form",{onSubmit:a,children:[e(F,{errorsMessage:d,completeMessage:l}),o?s(v,{children:[e("h5",{children:"Registrar nuevo usuario"}),s("div",{children:[e("input",{type:"text",name:"name",placeholder:"Escribe tu nombre apellido",required:!0,value:n.name,onChange:r,onBlur:i}),u.name&&e("p",{className:"error",children:u.name})]})]}):e("h5",{children:"Iniciar Sesi\xF3n"}),s("div",{children:[e("input",{type:"text",name:"email",placeholder:"Escribe tu nombre email",required:!0,value:n.email,onChange:r,onBlur:i}),u.email&&e("p",{className:"error",children:u.email})]}),s("div",{children:[e("input",{type:"password",name:"password",placeholder:"Escribe tu nombre contrase\xF1a",required:!0,value:n.password,onChange:r,onBlur:i}),u.password&&e("p",{className:"error",children:u.password})]}),e("br",{}),e("button",{type:"submit",children:o?"Continuar":"Iniciar Sesi\xF3n"}),e("br",{}),o?s("p",{children:[" \xBFYa eres mienbro de BTG? ",e("b",{onClick:()=>{t(!1)},children:"Iniciar sesi\xF3n"})]}):s("p",{children:[" \xBFQuieres ser parte de BTG? ",e("b",{onClick:()=>t(!0),children:"Unirse ahora "})]})]})})}const De=p.div`
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

`;function Qe(){return e(qe,{children:e(Le,{})})}const qe=p.div`
  display: flex;
  flex-direction: column;
`;function P({admin:o,answer:t}){return s(Te,{children:[s("p",{children:[e("b",{children:"Respuesta:"})," ",e("br",{})," ",t," "]}),e("br",{}),s("h6",{children:["Administrador: ",o]})]})}const Te=p.div`
    margin-top:-10px;
    margin-bottom:15px;
    padding: 10px 20px;
    border: 1px solid #ddd;
    background-color: #fff;
    opacity: .7;

`;function Me({questionId:o}){const[t,n]=c.exports.useState(null),[r,i]=c.exports.useState(null),[a,d]=c.exports.useState(""),l=h=>{i(h),d(""),setTimeout(()=>{i(null)},3e3)},u=h=>{n(h),setTimeout(()=>{n(null)},3e3)},[g]=k(ve,{onCompleted:h=>{l("Respuesta creada con \xE9xito")},onError:h=>{console.error(h),u("Error con esta peticion, intentelo nuevamenta mas tarde!")}});return s(v,{children:[e(F,{errorsMessage:t,completeMessage:r}),e(Be,{children:s("form",{onSubmit:h=>{h.preventDefault(),console.log("eee",a),a&&g({variables:{questionId:o,answer:a}})},children:[e("textarea",{placeholder:"Agregar respueta",type:"text",name:"answer",value:a,onChange:h=>{d(h.target.value)}}),a&&e("button",{type:"submit",children:"Enviar"})]})})]})}const Be=p.div`
width: 95%;
margin: 0 auto;
position: relative;
padding: 0;
form{
  position: relative;
  box-sizing: border-box;
>textarea {
        box-sizing: border-box;
        padding: 10px 20px;
        border: 1px solid #0F202D;
        font-size: 16px;
        font-weight: 700;
        outline: 0;
        width: 100%;
        border-radius: 5px;
        background: #fff;
        color: #000;
        z-index:1;
      }
      >button {
  font-size: 12px;
  font-weight: 600;
  background: #0069d2;
  border: none;
  padding: 10px 20px;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  cursor: pointer;
  color: #fff;
  position: absolute;
  margin-bottom: -32px;
  bottom:0;
  right:0;
  &:hover{
    opacity: .8;
  }
}
}

`;function Pe({petition:o,question:t,answer:n,setDetail:r,date:i}){return e(Re,{children:s("div",{children:[e("p",{className:"closes",onClick:()=>r(!1),children:"x"}),e("h5",{children:"Detalle de la solicitud"}),e("h4",{children:o}),e("span",{children:i.toLocaleString()}),e("p",{className:"question",children:t}),e("div",{children:n.length>0&&n.map(a=>e(P,{admin:a.admin.username,answer:a.answer},a.id))})]})})}const Re=p.div`
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
`;function Ue({question:o,questionId:t,createdAt:n,petition:r,answer:i,client:a}){const[d,l]=c.exports.useState(!1),u=new Date(parseInt(n));return s(v,{children:[d&&e(Pe,{setDetail:l,date:u,petition:r,question:o,answer:i}),s(je,{children:[e("h4",{children:r}),e("span",{children:u.toLocaleString()}),e("div",{children:s("p",{children:[e("b",{children:"Cliente:"})," ",a]})}),e("p",{onClick:()=>l(!0),children:o}),e("div",{className:"answer",onClick:()=>l(!0),children:i.length>0&&i.map(g=>e(P,{admin:g.admin.username,answer:g.answer},g.id))}),e(Me,{questionId:t})]})]})}const je=p.div`
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
`;function Oe(){var n;const{data:o,error:t}=A(de,{pollInterval:2e3});return console.log("data",o),t?null:e("div",{children:o&&((n=o.allQuestion)==null?void 0:n.map(r=>e(Ue,{client:r.client.username,question:r.question,questionId:r.id,createdAt:r.createdAt,petition:r.petition.name,answer:r.answer},r.id)))})}function _e(){return e(He,{children:e(Oe,{})})}const He=p.div`
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
`;function Ge(){return s(Ve,{children:[e(B,{}),e(_e,{})]})}const Ve=p.div`
max-width: 1300px;
margin: auto;
display: flex;
flex: 1;
@media(max-width: 800px){
  flex-direction: column;
  position: relative;
}
`;function We(){const{setUser:o}=c.exports.useContext(y),{data:t}=A(re);return t&&o(t.getUser),e("div",{className:"App",children:e("section",{children:e(T.Consumer,{children:({isAuth:n,users:r})=>n?s(v,{children:[console.log("Users",r),Object.keys(r).length&&r.role==="admin"&&e($,{children:e(Ge,{path:"/"})}),Object.keys(r).length&&r.role==="client"&&e($,{children:e(Ee,{path:"/"})})]}):e($,{children:e(Qe,{path:"/"})})})})})}const Ze=new K({uri:"http://localhost:4000/graphql"}),Ke=new Y((o,t)=>{const n=window.sessionStorage.getItem("token"),r=n?`Bearer ${n}`:"";return o.setContext(({headers:i={}})=>({headers:N(S({},i),{authorization:r})})),t(o)}),Ye=new J({cache:new X,connectToDevTools:!0,link:ee([Ke,Ze]),onError:o=>{o&&(window.sessionStorage.removeItem("token"),window.location.href="/")}});te.render(e(T.Provider,{children:e(oe,{client:Ye,children:e(We,{})})}),document.getElementById("root"));
