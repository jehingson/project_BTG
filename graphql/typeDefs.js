const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql")
const { User, Post, Comment } = require("../models")

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "Tipo de dato del usuaurio",
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createdAt: { type: GraphQLString },
    }
})

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "Tipo de dato de la publicacion",
    fields: () =>( {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        author: {
            type: UserType, resolve(parent) {
                return User.findById(parent.authorId)
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent) {
                return Comment.find({postId: parent.id})
            }
        }
    })
})

const CommentType = new GraphQLObjectType({
    name: "CommentType",
    description: "tipo de dato de commentarios",
    fields: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        user: {
            type: UserType, resolve(parent) {
                console.log('parent', parent)
                return User.findById(parent.userId)
            }
        },
        post: {
            type: PostType, resolve(parent) {
                return Post.findById(parent.postId)
            }
        },
    }
})






module.exports = {
    UserType,
    PostType,
    CommentType
}