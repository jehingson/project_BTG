const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema')
const { connectDB } = require('./db')

const { authenticate } = require('./middlewares/auth')

connectDB()
const app = express();

app.use(authenticate)

app.get('/', (req, res) => {
    res.send('Welcome api graphql')
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(3000)
console.log('server in on port: 3000')