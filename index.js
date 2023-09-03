const express = require('express');
const app = express;
const port = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello world!' })
});

app.listen(port,()=>{
    console.log(`node API listening on port: ${port}`)
});
