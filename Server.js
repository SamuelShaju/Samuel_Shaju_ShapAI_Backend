const express = require('express');
const app = express();

app.listen(8081, () => {console.log('Listening to Port: 8081')});
app.use(express.static('public'));
app.use(express.json({limit:'100kb'}));


app.post('/SendHW', (req, res) =>{
    console.log('received');
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const BMI = weight/(height*height);
    res.json(BMI);
});