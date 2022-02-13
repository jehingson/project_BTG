const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { 
    users, 
    getUser, 
    allPetition,
    allQuestion,
    getOneQuestion
} = require('./queries')
const { 
    register, 
    login,
    createQuestion,
    addAnswer 
} = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {
        users,
        getUser,
        allPetition,
        allQuestion,
        getOneQuestion
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root mutation type",
    fields: {
        register,
        login,
        createQuestion,
        addAnswer
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

