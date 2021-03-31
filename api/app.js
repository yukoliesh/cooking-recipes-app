const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// This will take two arguments, connection string and object. Object takes the url parser
mongoose.connect('mongodb+srv://admin:asianCooking@cluster0.wvmnb.mongodb.net/cooking-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log('Error', err));

// Temporary setup
const schema = buildSchema(`
  type Query {
    name: String
  }
`)

const rootValue = {
  name: () => {
    return 'Miso Soup 01'
  }
}

// Setting GraphQL
app.use('/graphql', graphqlHTTP({
  // schema: schema,
  // ES6
  schema,
  graphiql: true,
  // rootValue : rootValue -> ES6
  rootValue
}))

app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4001, () => {
  console.log('Server on port 4001')
})