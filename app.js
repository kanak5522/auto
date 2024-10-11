const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('<h1>auto scaling app</h1> <h4>messge : success </h4> <p>version : 1.0.0</p>');
})
app.listen(port, () => {
    console.log(`demo app is up and listening to port ${port}`);
})