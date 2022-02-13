const { GraphQLList, GraphQLID } = require('graphql');
const { User, Post } = require('../models');
const { UserType, PostType } = require('./typeDefs');

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
    resolve: (_, { id }) => {
        return User.findById(id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Todas las publicaciones',
    resolve: () => Post.find()

}

const getPost = {
    type: PostType,
    description: 'Detalle de una publicacion',
    args: {
        id: {type: GraphQLID}
    },
    resolve(_, args){
        const post = Post.findById(args.id)
        return post
    }
}

module.exports = {
    users,
    getUser,
    posts,
    getPost
}