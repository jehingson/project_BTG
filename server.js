require('dotenv/config');

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema')
const { connectDB } = require('./db')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const { authenticate } = require('./middlewares/auth')

connectDB()
const app = express();
app.use(cookieParser())
app.use(authenticate)
app.use(cors());


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/dist'))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'frontend','dist', 'index.html' ))
    })
  }

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const port = process.env.PORT || 4000;


app.listen(port)
console.log('server in on port: ' + port)