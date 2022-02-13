const { GraphQLString, GraphQLID } = require("graphql");
const { User, Post, Comment } = require('../models')
const { createJWTToken } = require('../util/auth');
const { PostType, CommentType } = require("./typeDefs");

const register = {
    type: GraphQLString,
    description: "Registrar un nuevo usuario y retorna un token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    resolve: async (_, args) => {
        const { username, email, password, displayName } = args
        const user = new User({ username, email, password, displayName })
        await user.save()
        const token = createJWTToken({ _id: user._id, username: user.username, email: user.email })
        return token
    }
};


const login = {
    type: GraphQLString,
    description: "Iniciar sesion, retorna un token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: async (_, args) => {
        const { email, password } = args
        const user = await User.findOne({ email }).select('+password')
        if (!user || password !== user.password) throw new Error('Usuario o contraseña incorrecto!')
        const token = createJWTToken({ _id: user._id, username: user.username, email: user.email })
        return token
    }
}


const createPost = {
    type: PostType,
    description: "Crear nueva publicacion",
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    resolve: async (_, args, { user }) => {
        const { title, body } = args
        const post = new Post({ title, body, authorId: user._id })
        await post.save()
        return post
    }
}

const updatePost = {
    type: PostType,
    description: "Update a post",
    args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    resolve: async (_, args, { user }) => {
        const { id, title, body } = args
        if (!user) throw new Error("No autenticado!")
        const post = await Post.findOneAndUpdate(
            {
                _id: id,
                authorId: user._id
            },
            {
                title,
                body
            }, {
            new: true,
            runValidators: true
        }
        )
        return post
    }
}

const deletePost = {
    type: GraphQLString,
    description: "Eliminar una publicacion",
    args: {
        postId: { type: GraphQLID }
    },
    resolve: async (_, { postId }, { user }) => {
        if (!user) throw new Error("No autenticado!")
        try {
            await Post.findOneAndDelete({
                _id: postId,
                authorId: user._id
            })
            return 'Publicacion eliminada'
        } catch (error) {
            console.log('error', error)
            throw new Error("Publicacion no encontrado")
        }
    }
}

const addComment = {
    type: CommentType,
    description: "Agregar un comentario a un publicacion",
    args: {
        comment: { type: GraphQLString },
        postId: { type: GraphQLID }
    },
    async resolve(_, { comment, postId }, { user }) {
        console.log('user', user, comment, postId)
        if (!user) throw new Error("No autenticado!")
        const newComment = new Comment({
            comment,
            postId,
            userId: user._id
        })
        return newComment.save()
    }

}

module.exports = {
    register,
    login,
    createPost,
    updatePost,
    deletePost,
    addComment
}