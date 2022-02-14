const { GraphQLString, GraphQLID } = require("graphql");
const { 
    User, 
    Question,
    Petition, 
    Answer 
} = require('../models')
const { createJWTToken } = require('../util/auth');

const bcrypt = require('bcrypt');
const { UserType } = require("./typeDefs");

const register = {
    type: GraphQLString,
    description: "Registrar un nuevo usuario y retorna un token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: async (_, args) => {
        try {
            const { username, email, password } = args
            const user = new User(
                {
                    username,
                    email,
                    password: await bcrypt.hash(password, 10)
                })

            await user.save()
            console.log('user', user)
            const token = createJWTToken(
                {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                })
            return token
        } catch (error) {
            console.log('error', error)
            throw new Error('Verifique la información, datos incorrectos o correo ya existente!')
        }
    }
};

const login = {
    type: UserType,
    description: "Iniciar sesion, retorna un token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: async (_, args) => {
        const { email, password } = args
        const user = await User.findOne({ email }).select('+password')
        if (!user) throw new Error('Usuario o contraseña incorrecto!')
        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) throw new Error('Usuario o contraseña incorrecto!')
        const token = createJWTToken({ _id: user._id, username: user.username, email: user.email, role: user.role })
        return {
            id: user._id, 
            username: user.username,
            email: user.email,
            role: user.role,
            token
        }
    }
}

const createQuestion = {
    type: GraphQLString,
    description: "Agregar una solicitud del cliente",
    args: {
        question: { type: GraphQLString },
        petitionId: { type: GraphQLID }
    },
    async resolve(_, { question, petitionId }, { user }) {
        if (!user || user.role !== 'client') throw new Error("No autenticado!")
        try {
            await Petition.findById(petitionId)
            const newQuestion = new Question({
                clientId: user._id,
                question,
                petitionId
            })
            await newQuestion.save()
            return 'Solicitud creada con éxito'
        } catch (error) {
            throw new Error("Error en el servidor, verifique el tipo de solicitud")
        }
    }
}

const addAnswer = {
    type: GraphQLString,
    description: "Agregar un respuesta del admin a la solicitud del cliente",
    args: {
        answer: { type: GraphQLString },
        questionId: { type: GraphQLID }
    },
    async resolve(_, { answer, questionId }, { user }) {
        if (!user || user.role !== 'admin') throw new Error("No autenticado!")
        try {
            await Question.findById(questionId)
            const newAnswer = new Answer({
                answer,
                questionId,
                adminId: user._id
            })
            await newAnswer.save()
            return 'Respuesta agregada con éxito.'
        } catch (error) {
            console.log('error', error)
            throw new Error("Error en el servidor, verifique la solicitud")
        }

    }
}

module.exports = {
    register,
    login,
    createQuestion,
    addAnswer
}