const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const routerUsers = require('./Router/routeUsers');
const seeder = require('./Helpers/seeder')
const { ConnectionDB } = require('./DataBase/config');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());//agregando middelwares
app.use(json());
app.use(cors());


app.use('/users', routerUsers);


app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  await ConnectionDB();
  await seeder();
});
