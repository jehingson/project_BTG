const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema')
const { connectDB } = require('./db')
const cors = require('cors')


const { authenticate } = require('./middlewares/auth')

connectDB()
const app = express();

app.use(authenticate)
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome api graphql')
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000)
console.log('server in on port: 3000')