const express = require('express');
const app = express();
const cors = require('cors')

require('./Connection/connection');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/auth', require('./Routes/userRoutes'));

app.listen(PORT, ()=>{
    console.log('App is listening on port : '+PORT);
});
