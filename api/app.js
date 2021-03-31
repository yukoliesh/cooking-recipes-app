const express = require ('express');
const app = express();
const mongoose = require('mongoose');

// This will take two arguments, connection string and object. Object takes the url parser
mongoose.connect('mongodb+srv://admin:asianCooking@cluster0.wvmnb.mongodb.net/cooking-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log('Error', err));

app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4001, () => {
  console.log('Server on port 4001')
})