const { GraphQLList, GraphQLID } = require('graphql');
const { 
    User, 
    Petition, 
    Question 
} = require('../models');
const { 
    UserType, 
    PetitionType,
     QuestionType 
    } = require('./typeDefs');

const users = {
    type: new GraphQLList(UserType),
    description: 'Listar usuarios creados',
    resolve: () => {
        return User.find()
    }
}

const getUser = {
    type: UserType,
    description: 'Filtrar usuario por id',
    args: {
        id: { type: GraphQLID }
    },
    resolve: (_,__, { user }) => {
        if (!user) throw new Error("No autenticado!")
        return User.findById(user._id)
    }
}

const getOneQuestion = {
    type: QuestionType,
    description: 'Detalle de una solicitud',
    args: {
        id: { type: GraphQLID }
    },
    resolve: (_, { id }, { user }) => {
        if (!user) throw new Error("No autenticado!")
        return Question.findById(id)
    }
}

const allQuestion = {
    type: new GraphQLList(QuestionType),
    description: 'Todas las solicitudes del clientes',
    resolve: (_, __, { user }) => {
        if (!user || user.role !== 'admin') throw new Error("No autenticado!")
        return Question.find().sort({ createdAt: -1 })
    }
}
const allQuestionClient = {
    type: new GraphQLList(QuestionType),
    description: 'Todas las solicitudes del clientes',
    resolve: (_, __, { user }) => {
        if (!user || user.role !== 'client') throw new Error("No autenticado!")
        return Question.find({clientId: user._id}).sort({ createdAt: -1 })
    }
}

const allPetition = {
    type: new GraphQLList(PetitionType),
    description: 'Tipos de solicitud del cliente',
    resolve: () => Petition.find()
}

module.exports = {
    users,
    getUser,
    allPetition,
    allQuestion,
    allQuestionClient,
    getOneQuestion
}