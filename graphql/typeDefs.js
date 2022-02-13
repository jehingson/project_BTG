const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList 
} = require("graphql")

const { 
    User, 
    Petition, 
    Answer 
} = require("../models")

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "Tipo de dato del usuaurio",
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        role: { type: GraphQLString },
    }
})

const PetitionType = new GraphQLObjectType({
    name: 'PetitionType',
    description: 'tipo de datos de las solicitud de cliente',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    }
})

const QuestionType = new GraphQLObjectType({
    name: 'QuestionType',
    description: 'tipo de datos para las preguntas del cliente',
    fields: () => ({
        id: { type: GraphQLID },
        question: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        client: {
            type: UserType,
            resolve: (parent) => User.findById(parent.clientId)
        },
        petition: {
            type: PetitionType,
            resolve: (parent) => Petition.findById(parent.petitionId)
        },
        answer: {
            type: new GraphQLList(AnswerType),
            resolve(parent){
                return Answer.find({questionId: parent.id})
            }

        }
    })
})

const AnswerType = new GraphQLObjectType({
    name: "AnswerType",
    description: "Tipo de datos para las respuestas del administrador",
    fields: {
        id: { type: GraphQLID },
        answer: { type: GraphQLString },
        admin: {
            type: UserType,
            resolve: (parent) => User.findById(parent.adminId)
        }
    }
})



module.exports = {
    UserType,
    PetitionType,
    QuestionType,
    AnswerType
}