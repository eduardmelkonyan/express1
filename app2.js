const express = require('express')
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));

const students = [];
app.post('/student', (req, res) => {
students.push({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
})
res.send('succses')
});

app.get('/student', (req,res) => {
    res.send(students)
})

app.get('/student/:searchBy/:value', (req, res) => {
    for(let i = 0; i < students.length; ++i){
        if(students[i][req.params.searchBy] === req.params.value) {
            return res.send(students[i]);
        }
    }
    return res.send('student not found!')
})

app.delete('/student/:deleteBy/:value', (req, res) => {
    for(let i = 0; i < students.length; ++i){
    if(students[i][req.params.deleteBy] === req.params.value) {
        delete (students[i]);
        return res.send('success')
    }
}
return res.send('student not found!')
})

app.put('/student', (req, res) => {
    res.send('hello world')
})
app.listen(3000);