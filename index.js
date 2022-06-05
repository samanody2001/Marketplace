const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ProductMethods = require('./ProductMethods');
const PORT = 3000;
const CONNECTION_STRING =
  'mongodb+srv://Samanody:%40Y145145@cluster0.bpe2tio.mongodb.net/?retryWrites=true&w=majority';
app.use(bodyParser.json());
app.get('/', ProductMethods.get);
app.post('/', ProductMethods.create);
app.get('/:id', ProductMethods.getByID);
app.put('/:id', ProductMethods.update);

// app.update("/cancel/:id", ProductMethods.cancelOrder);
// app.get("/status/:id", ProductMethods.getOrderStatus);

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log('DB is connected');
    app.listen(PORT, () => {
      console.log(`product service is running on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
