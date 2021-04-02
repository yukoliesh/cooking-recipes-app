require('dotenv').config()
const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const recipeSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// This will take two arguments, connection string and object. Object takes the url parser
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/cooking-app?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log('Error', err));

app.use(cors())

// Setting GraphQL
app.use('/graphql', graphqlHTTP({
  schema: recipeSchema,
  graphiql: true,
  rootValue: resolvers
}))

app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4001, () => {
  console.log('Server on port 4001')
})