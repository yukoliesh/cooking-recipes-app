require('dotenv').config()
const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const recipeSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const Auth = require('./auth');

const jwt = require('jsonwebtoken');

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
console.log("auth", Auth);
app.use('/graphql', graphqlHTTP({
  schema: recipeSchema,
  graphiql: true,
  rootValue: resolvers,
  context: Auth
}))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
const accessTokenSecret = 'youraccesstokensecret';

// signup/resgister
// app.post('/register', (req, res) => {
//   const { firstName, lastName,  email, password } = req.body;
//   // check the dupe email 
//   const existingUser = users.find(u => { return u.email === email });

// })

// login - fix the firstName, lastName to userName or email
// app.post('/login', (req, res) => {
//   const { firstName, lastName,  password } = req.body;
//   const user = users.find(u => { return u.firstName === firstName && u.lastName === lastName && u.password === password});
//   if(user) {
//     const accessToken = jwt.sign({ firstName: user.firstName, lastName: user.lastName, role: user.role }, accessTokenSecret);

//     res.json({
//       accessToken
//     });
//   } else {
//     res.send('Username or password incorrect');
//   }
// })

app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4001, () => {
  console.log('Server on port 4001')
})